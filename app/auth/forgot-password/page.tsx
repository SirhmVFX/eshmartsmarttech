"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import { FormInput } from "@/components/Input";

export default function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try { await resetPassword(email); setSent(true); }
    catch { setError("Could not send reset email. Check the address and try again."); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 py-16 font-sans">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 justify-center mb-10">
          <span className="w-9 h-9 bg-brand flex items-center justify-center text-black font-bold" style={{ borderRadius: "var(--radius)" }}>E</span>
          <div className="leading-tight">
            <span className="block text-white font-semibold text-sm">Eshmart</span>
            <span className="block text-brand font-semibold text-sm">SmartTech</span>
          </div>
        </Link>

        <div className="card-dark p-8">
          {sent ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-(--color-primary-muted) border border-(--color-primary)/40 flex items-center justify-center text-3xl mx-auto mb-5" style={{ borderRadius: "var(--radius-2xl)" }}>✉</div>
              <h2 className="text-xl font-bold text-white mb-2">Check your email</h2>
              <p className="text-white/50 text-sm mb-6">We&apos;ve sent a reset link to <span className="text-white font-semibold">{email}</span></p>
              <Link href="/auth/sign-in" className="text-brand text-sm font-semibold hover:underline">Back to sign in</Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-white mb-1">Reset password</h1>
              <p className="text-white/40 text-sm mb-8">Enter your email and we&apos;ll send you a reset link.</p>
              {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 mb-6" style={{ borderRadius: "var(--radius)" }}>{error}</div>}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormInput label="Email" type="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button type="submit" fullWidth loading={loading} className="mt-2">SEND RESET LINK →</Button>
              </form>
              <p className="text-center text-white/40 text-sm mt-6">
                <Link href="/auth/sign-in" className="text-brand hover:underline">Back to sign in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
