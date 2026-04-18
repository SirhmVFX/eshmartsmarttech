"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import { FormInput } from "@/components/Input";

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function SignUpPage() {
  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    if (form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
    setLoading(true);
    try {
      await signUp(form.email, form.password, form.name);
      router.push("/account/profile");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("email-already-in-use")) setError("An account with this email already exists.");
      else setError("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try { await signInWithGoogle(); router.push("/account/profile"); }
    catch { setError("Google sign-in failed."); }
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
          <h1 className="text-2xl font-bold text-white mb-1">Create an account</h1>
          <p className="text-white/40 text-sm mb-8">Join Eshmart SmartTech today</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 mb-6" style={{ borderRadius: "var(--radius)" }}>
              {error}
            </div>
          )}

          <button onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold text-sm py-3 hover:bg-white/90 transition-colors mb-5"
            style={{ borderRadius: "var(--radius)" }}>
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormInput label="Full name" type="text" placeholder="Adebayo Okafor" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <FormInput label="Email" type="email" placeholder="you@example.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <FormInput label="Password" type="password" placeholder="Min. 6 characters" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <FormInput label="Confirm password" type="password" placeholder="Repeat password" required value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
            <Button type="submit" fullWidth loading={loading} className="mt-2">CREATE ACCOUNT →</Button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="text-brand hover:underline font-semibold">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
