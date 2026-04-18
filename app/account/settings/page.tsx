"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import { FormInput } from "@/components/Input";

export default function SettingsPage() {
  const { user, logOut } = useAuth();
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pwMsg, setPwMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPw !== confirm) { setPwMsg({ type: "error", text: "Passwords do not match." }); return; }
    if (newPw.length < 6) { setPwMsg({ type: "error", text: "Password must be at least 6 characters." }); return; }
    setLoading(true);
    try {
      const credential = EmailAuthProvider.credential(user!.email!, current);
      await reauthenticateWithCredential(auth.currentUser!, credential);
      await updatePassword(auth.currentUser!, newPw);
      setPwMsg({ type: "success", text: "Password updated successfully." });
      setCurrent(""); setNewPw(""); setConfirm("");
    } catch {
      setPwMsg({ type: "error", text: "Current password is incorrect." });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => { await logOut(); router.push("/"); };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="card-light p-7 mb-5">
        <h2 className="font-bold text-base mb-5">Change password</h2>
        {pwMsg && (
          <div className={`text-sm px-4 py-3 mb-5 ${pwMsg.type === "success" ? "bg-green-500/10 border border-green-500/30 text-green-600" : "bg-red-500/10 border border-red-500/30 text-red-400"}`} style={{ borderRadius: "var(--radius)" }}>
            {pwMsg.text}
          </div>
        )}
        <form onSubmit={handlePasswordChange} className="flex flex-col gap-4 max-w-md">
          <FormInput label="Current password" theme="light" type="password" placeholder="••••••••" value={current} onChange={(e) => setCurrent(e.target.value)} />
          <FormInput label="New password" theme="light" type="password" placeholder="••••••••" value={newPw} onChange={(e) => setNewPw(e.target.value)} />
          <FormInput label="Confirm new password" theme="light" type="password" placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          <Button type="submit" loading={loading}>UPDATE PASSWORD</Button>
        </form>
      </div>

      <div className="card-light p-7 border-red-200">
        <h2 className="font-bold text-base mb-2 text-red-500">Sign out</h2>
        <p className="text-black/50 text-sm mb-5">You&apos;ll be signed out of your account on this device.</p>
        <Button variant="danger" onClick={handleSignOut}>SIGN OUT</Button>
      </div>
    </div>
  );
}
