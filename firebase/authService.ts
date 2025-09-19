import { auth, googleProvider } from './index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';

// Email/Password
export const signup = (email: string, password: string): Promise<UserCredential> =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string): Promise<UserCredential> =>
  signInWithEmailAndPassword(auth, email, password);

// Google Sign-In
export const loginWithGoogle = (): Promise<UserCredential> =>
  signInWithPopup(auth, googleProvider);

// Logout
export const logout = (): Promise<void> => signOut(auth);
