import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './config';

export async function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signUp(email, password, displayName) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName });

  // 솔로 패밀리를 먼저 생성하여 파트너 없이도 앱이 정상 동작하도록 함
  const familyRef = await addDoc(collection(db, 'families'), {
    members: [cred.user.uid],
    memberNames: { [cred.user.uid]: displayName },
    createdAt: serverTimestamp(),
  });

  await setDoc(doc(db, 'users', cred.user.uid), {
    displayName,
    email,
    familyId: familyRef.id,
    fcmTokens: [],
    notificationsEnabled: true,
    createdAt: serverTimestamp(),
  });
  return cred;
}

export async function logout() {
  return signOut(auth);
}

export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function updateUserProfile(uid, updates) {
  return updateDoc(doc(db, 'users', uid), updates);
}

export async function saveFcmToken(uid, token) {
  const userRef = doc(db, 'users', uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return;
  const { fcmTokens = [] } = snap.data();
  if (!fcmTokens.includes(token)) {
    await updateDoc(userRef, { fcmTokens: [...fcmTokens, token] });
  }
}

export async function removeFcmToken(uid, token) {
  const userRef = doc(db, 'users', uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return;
  const { fcmTokens = [] } = snap.data();
  await updateDoc(userRef, { fcmTokens: fcmTokens.filter((t) => t !== token) });
}
