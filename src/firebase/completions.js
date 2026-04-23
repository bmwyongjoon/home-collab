import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  getDocs,
  serverTimestamp,
  limit,
} from 'firebase/firestore';
import { db } from './config';

function completionsRef(familyId) {
  return collection(db, 'families', familyId, 'completions');
}

export function subscribeCompletions(familyId, callback) {
  const q = query(completionsRef(familyId), orderBy('completedAt', 'desc'), limit(500));
  return onSnapshot(q, (snap) => {
    const completions = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(completions);
  });
}

export async function addCompletion(familyId, data) {
  return addDoc(completionsRef(familyId), {
    ...data,
    completedAt: serverTimestamp(),
  });
}

export async function removeCompletion(familyId, completionId) {
  return deleteDoc(doc(db, 'families', familyId, 'completions', completionId));
}

// 특정 태스크+기간의 완료 여부 확인
export async function getCompletion(familyId, taskId, periodKey) {
  const q = query(
    completionsRef(familyId),
    where('taskId', '==', taskId),
    where('periodKey', '==', periodKey)
  );
  const snap = await getDocs(q);
  return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
}
