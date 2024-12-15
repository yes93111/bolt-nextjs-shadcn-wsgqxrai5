'use client';

import { AuthForm } from "@/components/auth/auth-form";

export default function RegisterPage() {
  const handleRegister = async (data: { email: string; password: string; name: string }) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }
  };

  return <AuthForm mode="register" onSubmit={handleRegister} />;
}