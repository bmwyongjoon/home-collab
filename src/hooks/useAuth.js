import { useEffect, useRef } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { getUserProfile } from '../firebase/auth';
import { createSoloFamily } from '../firebase/families';
import { useAuthStore } from '../store/authStore';

const FIREBASE_TIMEOUT_MS = 10000;

export function useAuthListener() {
  const { setCurrentUser, setUserProfile, setPartnerProfile, setFamilyId, setFamilyData, setLoading, setLoadError, reset } =
    useAuthStore();

  const unsubUserRef = useRef(null);
  const unsubFamilyRef = useRef(null);
  const creatingFamilyRef = useRef(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (useAuthStore.getState().isLoading) {
        setLoadError('서버에 연결할 수 없습니다.\n인터넷 연결을 확인하고 새로고침 해주세요.');
      }
    }, FIREBASE_TIMEOUT_MS);

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      clearTimeout(timeoutId);
      unsubFamilyRef.current?.();
      unsubUserRef.current?.();
      creatingFamilyRef.current = false;

      if (!user) {
        reset();
        return;
      }

      setCurrentUser(user);

      unsubUserRef.current = onSnapshot(doc(db, 'users', user.uid), async (snap) => {
        if (!snap.exists()) { setLoading(false); return; }

        const profile = { id: snap.id, ...snap.data() };
        setUserProfile(profile);

        if (profile.familyId) {
          creatingFamilyRef.current = false;
          setFamilyId(profile.familyId);

          unsubFamilyRef.current?.();
          unsubFamilyRef.current = onSnapshot(doc(db, 'families', profile.familyId), async (fSnap) => {
            if (!fSnap.exists()) { setLoading(false); return; }
            const family = { id: fSnap.id, ...fSnap.data() };
            setFamilyData(family);

            const partnerId = family.members.find((id) => id !== user.uid);
            if (partnerId) {
              const partner = await getUserProfile(partnerId);
              setPartnerProfile(partner);
            } else {
              setPartnerProfile(null);
            }
            setLoading(false);
          });
        } else if (!creatingFamilyRef.current) {
          // familyId가 없는 기존 사용자를 위해 솔로 패밀리 자동 생성
          creatingFamilyRef.current = true;
          try {
            await createSoloFamily(user.uid, profile.displayName || profile.email || '');
            // onSnapshot이 업데이트된 profile로 다시 호출됨
          } catch (err) {
            console.error('솔로 패밀리 생성 오류:', err);
            creatingFamilyRef.current = false;
            setLoading(false);
          }
        }
      });
    });

    return () => {
      clearTimeout(timeoutId);
      unsubAuth();
      unsubFamilyRef.current?.();
      unsubUserRef.current?.();
    };
  }, []);
}
