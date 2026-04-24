import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

export async function createSoloFamily(uid, displayName) {
  const ref = await addDoc(collection(db, 'families'), {
    members: [uid],
    memberNames: { [uid]: displayName },
    createdAt: serverTimestamp(),
  });
  await updateDoc(doc(db, 'users', uid), { familyId: ref.id });
  return ref.id;
}

export async function createFamily(uid1, displayName1, uid2, displayName2) {
  const ref = await addDoc(collection(db, 'families'), {
    members: [uid1, uid2],
    memberNames: { [uid1]: displayName1, [uid2]: displayName2 },
    createdAt: serverTimestamp(),
  });
  await updateDoc(doc(db, 'users', uid1), { familyId: ref.id });
  await updateDoc(doc(db, 'users', uid2), { familyId: ref.id });
  return ref.id;
}

export async function getFamilyByMember(uid) {
  const q = query(collection(db, 'families'), where('members', 'array-contains', uid));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const first = snap.docs[0];
  return { id: first.id, ...first.data() };
}

export async function getFamily(familyId) {
  const snap = await getDoc(doc(db, 'families', familyId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export function subscribeFamily(familyId, callback) {
  return onSnapshot(doc(db, 'families', familyId), (snap) => {
    callback(snap.exists() ? { id: snap.id, ...snap.data() } : null);
  });
}
