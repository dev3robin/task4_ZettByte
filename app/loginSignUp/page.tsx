
'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { signup, login, logout, loginWithGoogle } from '@/firebase/authService';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
    });
    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    try {
      const res = await signup(email, password);
      if (res.user) {
        router.push('/');
      }
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  return (
    <div className="max-w-md text-white mx-auto mt-10 p-6 bg-gray-900 rounded-xl shadow-md space-y-4">
      <h1 className="text-sm font-bold text-center">Give your details to continue</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 rounded border-1 "
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 rounded  border-1"
      />

      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={handleSignUp}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
        <button
          onClick={() => login(email, password).catch(console.error)}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={() => loginWithGoogle().catch(console.error)}
          className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600"
        >
          Google
        </button>
        <button
          onClick={() => logout().catch(console.error)}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
