import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  currentUser: null,       // Firebase Auth user
  userProfile: null,       // Firestore users/{uid}
  partnerProfile: null,    // 상대방 프로필
  familyId: null,
  familyData: null,
  isLoading: true,

  setCurrentUser: (user) => set({ currentUser: user }),
  setUserProfile: (profile) => set({ userProfile: profile }),
  setPartnerProfile: (profile) => set({ partnerProfile: profile }),
  setFamilyId: (id) => set({ familyId: id }),
  setFamilyData: (data) => set({ familyData: data }),
  setLoading: (loading) => set({ isLoading: loading }),

  reset: () =>
    set({
      currentUser: null,
      userProfile: null,
      partnerProfile: null,
      familyId: null,
      familyData: null,
      isLoading: false,
    }),
}));
