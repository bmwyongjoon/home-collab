import { create } from 'zustand';

export const useTaskStore = create((set, get) => ({
  tasks: [],
  categories: [],
  completions: [],

  setTasks: (tasks) => set({ tasks }),
  setCategories: (categories) => set({ categories }),
  setCompletions: (completions) => set({ completions }),

  getCategoryById: (id) => get().categories.find((c) => c.id === id),

  isCompleted: (taskId, periodKey) =>
    get().completions.some((c) => c.taskId === taskId && c.periodKey === periodKey),

  getCompletionForPeriod: (taskId, periodKey) =>
    get().completions.find((c) => c.taskId === taskId && c.periodKey === periodKey),
}));
