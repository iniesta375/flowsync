import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

const tasksCol = (uid) => collection(db, 'users', uid, 'tasks');

export const subscribeTasks = (uid, callback) => {
  const q = query(tasksCol(uid), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snap) => {
    const tasks = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(tasks);
  });
};

export const createTask = (uid, data) =>
  addDoc(tasksCol(uid), {
    ...data,
    status: 'pending',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

export const updateTask = (uid, taskId, data) =>
  updateDoc(doc(db, 'users', uid, 'tasks', taskId), {
    ...data,
    updatedAt: serverTimestamp(),
  });

export const deleteTask = (uid, taskId) =>
  deleteDoc(doc(db, 'users', uid, 'tasks', taskId));

export const toggleTaskStatus = (uid, taskId, currentStatus) =>
  updateDoc(doc(db, 'users', uid, 'tasks', taskId), {
    status: currentStatus === 'pending' ? 'completed' : 'pending',
    updatedAt: serverTimestamp(),
  });
