import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from './config';

function tasksRef(familyId) {
  return collection(db, 'families', familyId, 'tasks');
}

export function subscribeTasks(familyId, callback) {
  const q = query(tasksRef(familyId), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snap) => {
    const tasks = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(tasks);
  });
}

export async function createTask(familyId, taskData) {
  const data = {
    ...taskData,
    isActive: true,
    createdAt: serverTimestamp(),
  };
  if (taskData.recurrence?.startDate && !(taskData.recurrence.startDate instanceof Timestamp)) {
    data.recurrence = {
      ...taskData.recurrence,
      startDate: Timestamp.fromDate(new Date(taskData.recurrence.startDate)),
    };
  }
  if (taskData.dueDate && !(taskData.dueDate instanceof Timestamp)) {
    data.dueDate = Timestamp.fromDate(new Date(taskData.dueDate));
  }
  const ref = await addDoc(tasksRef(familyId), data);
  return ref.id;
}

export async function updateTask(familyId, taskId, updates) {
  const data = { ...updates };
  if (updates.recurrence?.startDate && !(updates.recurrence.startDate instanceof Timestamp)) {
    data.recurrence = {
      ...updates.recurrence,
      startDate: Timestamp.fromDate(new Date(updates.recurrence.startDate)),
    };
  }
  if (updates.dueDate && !(updates.dueDate instanceof Timestamp)) {
    data.dueDate = Timestamp.fromDate(new Date(updates.dueDate));
  }
  return updateDoc(doc(db, 'families', familyId, 'tasks', taskId), data);
}

export async function deleteTask(familyId, taskId) {
  return deleteDoc(doc(db, 'families', familyId, 'tasks', taskId));
}
