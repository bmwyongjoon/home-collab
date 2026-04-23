import { Check, Pencil, Trash2, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { addCompletion, removeCompletion } from '../firebase/completions';
import { deleteTask } from '../firebase/tasks';
import { sendPushNotification } from '../firebase/notifications';
import { getPeriodKey, RECURRENCE_LABELS } from '../utils/recurrence';
import { formatDate, isOverdue, toDate } from '../utils/dateHelpers';
import CategoryBadge from './CategoryBadge';
import AssigneeBadge from './AssigneeBadge';

export default function TaskCard({ task, date, showActions = true }) {
  const navigate = useNavigate();
  const { currentUser, userProfile, partnerProfile, familyId } = useAuthStore();
  const { isCompleted, getCompletionForPeriod, getCategoryById } = useTaskStore();

  const periodKey = getPeriodKey(date || new Date());
  const completed = isCompleted(task.id, periodKey);
  const completion = getCompletionForPeriod(task.id, periodKey);
  const category = getCategoryById(task.categoryId);
  const overdue =
    task.type === 'one-time' && task.dueDate && isOverdue(task.dueDate) && !completed;

  function getAssigneeName(uid) {
    if (uid === 'together') return '함께';
    return uid === currentUser?.uid
      ? userProfile?.displayName || '나'
      : partnerProfile?.displayName || '상대방';
  }

  async function handleToggle() {
    if (completed) {
      if (completion) await removeCompletion(familyId, completion.id);
      return;
    }
    await addCompletion(familyId, {
      taskId: task.id,
      taskTitle: task.title,
      categoryId: task.categoryId || null,
      completedBy: currentUser.uid,
      completedByName: userProfile?.displayName || '',
      periodKey,
      isAssist: task.assigneeId !== currentUser.uid && task.assigneeId !== 'together',
    });

    // 파트너 알림
    if (partnerProfile?.notificationsEnabled && partnerProfile?.fcmTokens?.length > 0) {
      const actor = userProfile?.displayName || '상대방';
      sendPushNotification({
        tokens: partnerProfile.fcmTokens,
        title: '✅ 태스크 완료!',
        body: `${actor}님이 "${task.title}"을(를) 완료했어요.`,
        data: { taskId: task.id },
      });
    }
  }

  async function handleDelete() {
    if (!window.confirm(`"${task.title}" 태스크를 삭제할까요?`)) return;
    await deleteTask(familyId, task.id);
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border transition-all ${
        overdue ? 'border-red-200 bg-red-50' : 'border-slate-100'
      } ${completed ? 'opacity-60' : ''}`}
    >
      <div className="flex items-start gap-3 p-4">
        {/* 완료 체크 버튼 */}
        <button
          onClick={handleToggle}
          className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            completed
              ? 'bg-primary-600 border-primary-600 text-white'
              : 'border-slate-300 hover:border-primary-400'
          }`}
        >
          {completed && <Check size={14} strokeWidth={3} />}
        </button>

        {/* 태스크 정보 */}
        <div className="flex-1 min-w-0">
          <p
            className={`font-medium text-slate-800 ${completed ? 'line-through text-slate-400' : ''}`}
          >
            {task.title}
          </p>
          {task.description && (
            <p className="text-sm text-slate-500 mt-0.5 truncate">{task.description}</p>
          )}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {category && <CategoryBadge category={category} />}
            <AssigneeBadge name={getAssigneeName(task.assigneeId)} uid={task.assigneeId} currentUid={currentUser?.uid} />
            {task.type === 'routine' && task.recurrence && (
              <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                {RECURRENCE_LABELS[task.recurrence.type] || task.recurrence.type}
              </span>
            )}
            {task.type === 'one-time' && task.dueDate && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${overdue ? 'text-red-600 bg-red-100' : 'text-slate-400 bg-slate-100'}`}>
                {overdue ? '⚠️ ' : ''}{formatDate(task.dueDate)}까지
              </span>
            )}
          </div>
          {completed && completion && (
            <p className="text-xs text-slate-400 mt-1">
              {completion.completedByName}님이 완료
              {completion.isAssist && ' (도움)'}
            </p>
          )}
        </div>

        {/* 액션 버튼 */}
        {showActions && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={() => navigate(`/tasks/${task.id}/edit`)}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={handleDelete}
              className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
