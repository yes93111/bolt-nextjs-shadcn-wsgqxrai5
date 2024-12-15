'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    );
  }

  return (
    <div className="flex gap-4">
      <Link href="/login">
        <Button variant="outline">Login</Button>
      </Link>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
    </div>
  );
}