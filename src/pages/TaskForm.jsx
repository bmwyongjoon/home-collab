import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { createTask, updateTask } from '../firebase/tasks';
import { sendPushNotification } from '../firebase/notifications';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { DAY_LABELS, RECURRENCE_LABELS } from '../utils/recurrence';

const RECURRENCE_TYPES = ['daily', 'weekly', 'biweekly', 'monthly', 'quarterly', 'yearly'];

const defaultForm = {
  title: '',
  description: '',
  type: 'routine',
  assigneeId: 'together',
  categoryId: '',
  recurrence: {
    type: 'weekly',
    daysOfWeek: [],
    dayOfMonth: 1,
    startDate: format(new Date(), 'yyyy-MM-dd'),
  },
  dueDate: '',
};

export default function TaskForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id && id !== 'new';

  const { currentUser, userProfile, partnerProfile, familyId } = useAuthStore();
  const { tasks, categories } = useTaskStore();

  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    setForm({
      title: task.title || '',
      description: task.description || '',
      type: task.type || 'routine',
      assigneeId: task.assigneeId || 'together',
      categoryId: task.categoryId || '',
      recurrence: task.recurrence
        ? {
            type: task.recurrence.type || 'weekly',
            daysOfWeek: task.recurrence.daysOfWeek || [],
            dayOfMonth: task.recurrence.dayOfMonth || 1,
            startDate: task.recurrence.startDate?.toDate
              ? format(task.recurrence.startDate.toDate(), 'yyyy-MM-dd')
              : task.recurrence.startDate || format(new Date(), 'yyyy-MM-dd'),
          }
        : defaultForm.recurrence,
      dueDate: task.dueDate?.toDate
        ? format(task.dueDate.toDate(), 'yyyy-MM-dd')
        : task.dueDate || '',
    });
  }, [id, tasks]);

  function setField(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }
  function setRecurrence(field, value) {
    setForm((f) => ({ ...f, recurrence: { ...f.recurrence, [field]: value } }));
  }

  function toggleDayOfWeek(day) {
    const days = form.recurrence.daysOfWeek || [];
    const next = days.includes(day) ? days.filter((d) => d !== day) : [...days, day].sort();
    setRecurrence('daysOfWeek', next);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) { setError('제목을 입력해주세요.'); return; }
    if (form.type === 'routine' && ['weekly', 'biweekly'].includes(form.recurrence.type) && form.recurrence.daysOfWeek.length === 0) {
      setError('요일을 하나 이상 선택해주세요.'); return;
    }
    setError('');
    setLoading(true);

    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        type: form.type,
        assigneeId: form.assigneeId,
        categoryId: form.categoryId || null,
        createdBy: currentUser.uid,
      };

      if (form.type === 'routine') {
        payload.recurrence = { ...form.recurrence };
      } else {
        payload.dueDate = form.dueDate || null;
        payload.recurrence = null;
      }

      if (isEdit) {
        await updateTask(familyId, id, payload);
      } else {
        await createTask(familyId, payload);
        // 파트너 알림
        if (partnerProfile?.notificationsEnabled && partnerProfile?.fcmTokens?.length > 0) {
          sendPushNotification({
            tokens: partnerProfile.fcmTokens,
            title: '📋 새 태스크가 추가됐어요!',
            body: `"${payload.title}" 태스크가 추가됐습니다.`,
          });
        }
      }
      navigate(-1);
    } catch (err) {
      setError('저장 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const assigneeOptions = [
    { value: currentUser?.uid, label: `${userProfile?.displayName || '나'} (나)` },
    { value: partnerProfile?.id, label: `${partnerProfile?.displayName || '상대방'} (상대방)` },
    { value: 'together', label: '👫 함께' },
  ].filter((o) => o.value);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-100 px-4 h-14 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-slate-100">
          <ChevronLeft size={22} className="text-slate-600" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">{isEdit ? '태스크 수정' : '새 태스크'}</h1>
      </header>

      <form onSubmit={handleSubmit} className="px-4 py-4 space-y-5 pb-32">
        {/* 제목 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">제목 *</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setField('title', e.target.value)}
            placeholder="태스크 이름"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>

        {/* 메모 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">메모</label>
          <textarea
            value={form.description}
            onChange={(e) => setField('description', e.target.value)}
            placeholder="추가 설명 (선택)"
            rows={2}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
          />
        </div>

        {/* 유형 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">유형</label>
          <div className="flex bg-slate-100 rounded-xl p-1">
            {[{ v: 'routine', l: '🔁 루틴' }, { v: 'one-time', l: '📌 일회성' }].map(({ v, l }) => (
              <button
                key={v}
                type="button"
                onClick={() => setField('type', v)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  form.type === v ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* 루틴 설정 */}
        {form.type === 'routine' && (
          <div className="space-y-4 bg-white rounded-2xl p-4 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700">반복 설정</h3>

            {/* 반복 주기 */}
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">반복 주기</label>
              <div className="grid grid-cols-3 gap-2">
                {RECURRENCE_TYPES.map((rt) => (
                  <button
                    key={rt}
                    type="button"
                    onClick={() => setRecurrence('type', rt)}
                    className={`py-2 rounded-xl text-sm font-medium border transition-colors ${
                      form.recurrence.type === rt
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-slate-600 border-slate-200'
                    }`}
                  >
                    {RECURRENCE_LABELS[rt]}
                  </button>
                ))}
              </div>
            </div>

            {/* 요일 선택 (매주/격주) */}
            {['weekly', 'biweekly'].includes(form.recurrence.type) && (
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">요일 선택</label>
                <div className="flex gap-2">
                  {DAY_LABELS.map((label, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleDayOfWeek(i)}
                      className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
                        (form.recurrence.daysOfWeek || []).includes(i)
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 날짜 선택 (매달) */}
            {form.recurrence.type === 'monthly' && (
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">매달 몇 일</label>
                <input
                  type="number"
                  min={1}
                  max={31}
                  value={form.recurrence.dayOfMonth}
                  onChange={(e) => setRecurrence('dayOfMonth', Number(e.target.value))}
                  className="w-24 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
            )}

            {/* 시작일 */}
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">시작일</label>
              <input
                type="date"
                value={form.recurrence.startDate}
                onChange={(e) => setRecurrence('startDate', e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
          </div>
        )}

        {/* 일회성: 마감일 */}
        {form.type === 'one-time' && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">마감일 (선택)</label>
            <input
              type="date"
              value={form.dueDate}
              onChange={(e) => setField('dueDate', e.target.value)}
              className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
        )}

        {/* 담당자 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">담당자</label>
          <div className="space-y-2">
            {assigneeOptions.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setField('assigneeId', value)}
                className={`w-full flex items-center px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                  form.assigneeId === value
                    ? 'bg-primary-50 border-primary-400 text-primary-700'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                {form.assigneeId === value && <span className="mr-2 text-primary-500">✓</span>}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 카테고리 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">카테고리</label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setField('categoryId', '')}
              className={`px-3 py-1.5 rounded-xl text-sm border transition-colors ${
                !form.categoryId ? 'bg-slate-700 text-white border-slate-700' : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              없음
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setField('categoryId', cat.id)}
                className={`px-3 py-1.5 rounded-xl text-sm border transition-colors font-medium ${
                  form.categoryId === cat.id ? 'text-white border-transparent' : 'bg-white border-slate-200 text-slate-600'
                }`}
                style={form.categoryId === cat.id ? { backgroundColor: cat.color } : {}}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>}

        {/* 저장 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary-600 text-white rounded-xl font-semibold text-base hover:bg-primary-700 active:scale-[0.98] transition-all disabled:opacity-60"
          >
            {loading ? '저장 중...' : isEdit ? '수정 완료' : '태스크 추가'}
          </button>
        </div>
      </form>
    </div>
  );
}
