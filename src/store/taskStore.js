import { create } from 'zustand';

export const useTaskStore = create((set, get) => ({
  tasks: [],
  categories: [],
  completions: [],

  setTasks: (tasks) => set({ tasks }),
  setCategories: (categories) => set({ categories }),
  setCompletions: (completions) => set({ completions }),

  getCategoryById: (id) => get().categories.find((c) => c.id === id),

  // periodKey === 'permanent' 이면 일회성 태스크 — taskId 일치하는 완료 기록이 있으면 완료
  isCompleted: (taskId, periodKey) => {
    const comps = get().completions;
    if (periodKey === 'permanent') {
      return comps.some((c) => c.taskId === taskId);
    }
    return comps.some((c) => c.taskId === taskId && c.periodKey === periodKey);
  },

  getCompletionForPeriod: (taskId, periodKey) => {
    const comps = get().completions;
    if (periodKey === 'permanent') {
      return comps.find((c) => c.taskId === taskId);
    }
    return comps.find((c) => c.taskId === taskId && c.periodKey === periodKey);
  },
}));
