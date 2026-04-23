import { useEffect } from 'react';
import { subscribeTasks } from '../firebase/tasks';
import { subscribeCompletions } from '../firebase/completions';
import { subscribeCategories, initCategories } from '../firebase/categories';
import { useTaskStore } from '../store/taskStore';

export function useTasksListener(familyId) {
  const { setTasks, setCompletions, setCategories } = useTaskStore();

  useEffect(() => {
    if (!familyId) return;

    initCategories(familyId);

    const unsubTasks = subscribeTasks(familyId, setTasks);
    const unsubCompletions = subscribeCompletions(familyId, setCompletions);
    const unsubCategories = subscribeCategories(familyId, setCategories);

    return () => {
      unsubTasks();
      unsubCompletions();
      unsubCategories();
    };
  }, [familyId]);
}
