'use client';

import { AuthForm } from "@/components/auth/auth-form";
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const handleLogin = async (data: { email: string; password: string }) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!result?.ok) {
      throw new Error('Login failed');
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}