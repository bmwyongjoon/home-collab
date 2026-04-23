import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, BellOff, LogOut, UserPlus, Trash2, Plus, ChevronRight, History } from 'lucide-react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { logout, updateUserProfile, getUserProfile } from '../firebase/auth';
import { createFamily } from '../firebase/families';
import { addCategory, updateCategory, deleteCategory } from '../firebase/categories';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';
import { DEFAULT_CATEGORIES } from '../firebase/categories';
import { useNavigate as useNav } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const { currentUser, userProfile, partnerProfile, familyId } = useAuthStore();
  const { categories } = useTaskStore();

  const [partnerEmail, setPartnerEmail] = useState('');
  const [pairLoading, setPairLoading] = useState(false);
  const [pairError, setPairError] = useState('');
  const [pairSuccess, setPairSuccess] = useState('');
  const [showPairModal, setShowPairModal] = useState(false);
  const [showCatModal, setShowCatModal] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [newCatIcon, setNewCatIcon] = useState('📌');
  const [newCatColor, setNewCatColor] = useState('#6b7280');
  const [catLoading, setCatLoading] = useState(false);

  async function handleNotificationToggle() {
    if (!currentUser) return;
    await updateUserProfile(currentUser.uid, {
      notificationsEnabled: !userProfile?.notificationsEnabled,
    });
  }

  async function handlePair(e) {
    e.preventDefault();
    setPairError('');
    setPairSuccess('');
    setPairLoading(true);
    try {
      // Firestore에서 이메일로 유저 검색
      const { getDocs, query, collection, where } = await import('firebase/firestore');
      const { db } = await import('../firebase/config');
      const q = query(collection(db, 'users'), where('email', '==', partnerEmail.trim()));
      const snap = await getDocs(q);
      if (snap.empty) {
        setPairError('해당 이메일로 가입된 사용자가 없어요.');
        return;
      }
      const partnerDoc = snap.docs[0];
      const partnerData = partnerDoc.data();
      if (partnerDoc.id === currentUser.uid) {
        setPairError('자신의 이메일은 입력할 수 없어요.');
        return;
      }
      if (partnerData.familyId) {
        setPairError('상대방이 이미 다른 가족과 연결되어 있어요.');
        return;
      }
      await createFamily(
        currentUser.uid,
        userProfile?.displayName || '',
        partnerDoc.id,
        partnerData.displayName || ''
      );
      setPairSuccess(`${partnerData.displayName}님과 연결됐어요! 🎉`);
      setPartnerEmail('');
      setTimeout(() => setShowPairModal(false), 1500);
    } catch (err) {
      setPairError('연결 중 오류가 발생했습니다.');
    } finally {
      setPairLoading(false);
    }
  }

  async function handleAddCategory(e) {
    e.preventDefault();
    if (!newCatName.trim()) return;
    setCatLoading(true);
    try {
      await addCategory(familyId, {
        name: newCatName.trim(),
        icon: newCatIcon,
        color: newCatColor,
        order: categories.length,
        isDefault: false,
      });
      setNewCatName('');
      setShowCatModal(false);
    } finally {
      setCatLoading(false);
    }
  }

  async function handleDeleteCategory(catId) {
    if (!window.confirm('이 카테고리를 삭제할까요?')) return;
    await deleteCategory(familyId, catId);
  }

  const PRESET_COLORS = ['#3b82f6', '#f97316', '#22c55e', '#a855f7', '#6b7280', '#ef4444', '#eab308', '#06b6d4'];
  const PRESET_ICONS = ['🧹', '🍳', '🛒', '🔧', '📌', '🧺', '🐶', '🌿', '🔑', '💊', '📦', '🚗'];

  return (
    <Layout title="설정">
      <div className="space-y-4">
        {/* 프로필 */}
        <section className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-50">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">프로필</h2>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <p className="font-bold text-slate-800">{userProfile?.displayName || '–'}</p>
                <p className="text-sm text-slate-400">{userProfile?.email}</p>
              </div>
            </div>
          </div>
          {partnerProfile && (
            <div className="px-4 pb-4">
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-sm">👤</div>
                <div>
                  <p className="text-sm font-medium text-slate-700">{partnerProfile.displayName}</p>
                  <p className="text-xs text-slate-400">파트너</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 파트너 연결 */}
        {!familyId && (
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p className="text-sm font-medium text-amber-800 mb-2">⚠️ 파트너와 아직 연결되지 않았어요</p>
            <p className="text-xs text-amber-600 mb-3">파트너가 먼저 앱에 가입한 후, 이메일로 연결하세요.</p>
            <button
              onClick={() => setShowPairModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-xl text-sm font-medium"
            >
              <UserPlus size={16} /> 파트너 연결하기
            </button>
          </section>
        )}

        {/* 알림 설정 */}
        <section className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-50">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">알림</h2>
          </div>
          <button
            onClick={handleNotificationToggle}
            className="w-full flex items-center justify-between px-4 py-4 hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              {userProfile?.notificationsEnabled ? (
                <Bell size={20} className="text-primary-600" />
              ) : (
                <BellOff size={20} className="text-slate-400" />
              )}
              <div className="text-left">
                <p className="text-sm font-medium text-slate-800">푸시 알림</p>
                <p className="text-xs text-slate-400">태스크 완료/추가 시 알림 받기</p>
              </div>
            </div>
            <div
              className={`w-12 h-6 rounded-full transition-colors ${
                userProfile?.notificationsEnabled ? 'bg-primary-600' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-sm mt-0.5 transition-transform ${
                  userProfile?.notificationsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </div>
          </button>
        </section>

        {/* 카테고리 관리 */}
        {familyId && (
          <section className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-50 flex items-center justify-between">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">카테고리</h2>
              <button
                onClick={() => setShowCatModal(true)}
                className="flex items-center gap-1 text-xs text-primary-600 font-medium"
              >
                <Plus size={14} /> 추가
              </button>
            </div>
            <div className="divide-y divide-slate-50">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{ backgroundColor: cat.color + '20' }}>
                      {cat.icon}
                    </span>
                    <span className="text-sm font-medium text-slate-800">{cat.name}</span>
                  </div>
                  {!cat.isDefault && (
                    <button
                      onClick={() => handleDeleteCategory(cat.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg"
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 히스토리 바로가기 */}
        <button
          onClick={() => navigate('/history')}
          className="w-full flex items-center justify-between bg-white rounded-2xl border border-slate-100 px-4 py-4 hover:bg-slate-50"
        >
          <div className="flex items-center gap-3">
            <History size={20} className="text-slate-500" />
            <span className="text-sm font-medium text-slate-800">완료 히스토리</span>
          </div>
          <ChevronRight size={18} className="text-slate-300" />
        </button>

        {/* 로그아웃 */}
        <button
          onClick={() => logout()}
          className="w-full flex items-center gap-3 bg-white rounded-2xl border border-slate-100 px-4 py-4 text-red-500 hover:bg-red-50"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">로그아웃</span>
        </button>
      </div>

      {/* 파트너 연결 모달 */}
      <Modal isOpen={showPairModal} onClose={() => setShowPairModal(false)} title="파트너 연결">
        <form onSubmit={handlePair} className="space-y-4">
          <p className="text-sm text-slate-500">파트너의 이메일을 입력하세요. 상대방이 먼저 앱에 가입되어 있어야 합니다.</p>
          <input
            type="email"
            value={partnerEmail}
            onChange={(e) => setPartnerEmail(e.target.value)}
            placeholder="partner@email.com"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
          {pairError && <p className="text-red-500 text-sm">{pairError}</p>}
          {pairSuccess && <p className="text-green-600 text-sm">{pairSuccess}</p>}
          <button
            type="submit"
            disabled={pairLoading}
            className="w-full py-3 bg-primary-600 text-white rounded-xl font-medium disabled:opacity-60"
          >
            {pairLoading ? '연결 중...' : '연결하기'}
          </button>
        </form>
      </Modal>

      {/* 카테고리 추가 모달 */}
      <Modal isOpen={showCatModal} onClose={() => setShowCatModal(false)} title="카테고리 추가">
        <form onSubmit={handleAddCategory} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">이름</label>
            <input
              type="text"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              placeholder="카테고리 이름"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">아이콘</label>
            <div className="flex flex-wrap gap-2">
              {PRESET_ICONS.map((icon) => (
                <button key={icon} type="button" onClick={() => setNewCatIcon(icon)}
                  className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition-colors ${newCatIcon === icon ? 'border-primary-400 bg-primary-50' : 'border-transparent hover:bg-slate-100'}`}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">색상</label>
            <div className="flex flex-wrap gap-2">
              {PRESET_COLORS.map((color) => (
                <button key={color} type="button" onClick={() => setNewCatColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${newCatColor === color ? 'border-slate-800 scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
          <button type="submit" disabled={catLoading || !newCatName.trim()}
            className="w-full py-3 bg-primary-600 text-white rounded-xl font-medium disabled:opacity-60">
            {catLoading ? '추가 중...' : '카테고리 추가'}
          </button>
        </form>
      </Modal>
    </Layout>
  );
}
