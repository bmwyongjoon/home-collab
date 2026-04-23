import { useEffect, useRef } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { getUserProfile } from '../firebase/auth';
import { useAuthStore } from '../store/authStore';

export function useAuthListener() {
  const { setCurrentUser, setUserProfile, setPartnerProfile, setFamilyId, setFamilyData, setLoading, reset } =
    useAuthStore();

  // 중첩 구독을 정리하기 위한 ref
  const unsubUserRef = useRef(null);
  const unsubFamilyRef = useRef(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      // 이전 구독 정리
      unsubFamilyRef.current?.();
      unsubUserRef.current?.();

      if (!user) {
        reset();
        return;
      }

      setCurrentUser(user);

      unsubUserRef.current = onSnapshot(doc(db, 'users', user.uid), (snap) => {
        if (!snap.exists()) { setLoading(false); return; }

        const profile = { id: snap.id, ...snap.data() };
        setUserProfile(profile);

        if (profile.familyId) {
          setFamilyId(profile.familyId);

          unsubFamilyRef.current = onSnapshot(doc(db, 'families', profile.familyId), async (fSnap) => {
            if (!fSnap.exists()) { setLoading(false); return; }
            const family = { id: fSnap.id, ...fSnap.data() };
            setFamilyData(family);

            const partnerId = family.members.find((id) => id !== user.uid);
            if (partnerId) {
              const partner = await getUserProfile(partnerId);
              setPartnerProfile(partner);
            }
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      });
    });

    return () => {
      unsubAuth();
      unsubFamilyRef.current?.();
      unsubUserRef.current?.();
    };
  }, []);
}
