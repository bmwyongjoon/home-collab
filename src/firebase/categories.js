import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

export const DEFAULT_CATEGORIES = [
  { name: '청소', color: '#3b82f6', icon: '🧹', order: 0 },
  { name: '주방', color: '#f97316', icon: '🍳', order: 1 },
  { name: '장보기', color: '#22c55e', icon: '🛒', order: 2 },
  { name: '집관리', color: '#a855f7', icon: '🔧', order: 3 },
  { name: '기타', color: '#6b7280', icon: '📌', order: 4 },
];

function categoriesRef(familyId) {
  return collection(db, 'families', familyId, 'categories');
}

export async function initCategories(familyId) {
  const snap = await getDocs(categoriesRef(familyId));
  if (!snap.empty) return;
  const batch = writeBatch(db);
  DEFAULT_CATEGORIES.forEach((cat) => {
    batch.set(doc(categoriesRef(familyId)), {
      ...cat,
      isDefault: true,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}

export function subscribeCategories(familyId, callback) {
  const q = query(categoriesRef(familyId), orderBy('order', 'asc'));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
}

export async function addCategory(familyId, data) {
  return addDoc(categoriesRef(familyId), { ...data, createdAt: serverTimestamp() });
}

export async function updateCategory(familyId, categoryId, updates) {
  return updateDoc(doc(db, 'families', familyId, 'categories', categoryId), updates);
}

export async function deleteCategory(familyId, categoryId) {
  return deleteDoc(doc(db, 'families', familyId, 'categories', categoryId));
}
