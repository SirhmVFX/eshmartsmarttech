"use client";

import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import { FormInput } from "@/components/Input";

export default function ProfilePage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    await updateProfile(auth.currentUser!, { displayName: name });
    await updateDoc(doc(db, "users", user.uid), { displayName: name });
    setSaved(true);
    setLoading(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      <div className="card-light p-7">
        <div className="flex items-center gap-5 mb-8 pb-8 border-b border-black/8">
          <div className="w-16 h-16 bg-(--color-primary-muted) border-2 border-(--color-primary)/40 flex items-center justify-center text-brand font-bold text-2xl" style={{ borderRadius: "var(--radius-2xl)" }}>
            {(user?.displayName || user?.email || "U")[0].toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-lg">{user?.displayName || "Account"}</p>
            <p className="text-black/40 text-sm">{user?.email}</p>
            <p className="text-xs text-brand mt-1">Eshmart SmartTech Member</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="flex flex-col gap-5 max-w-md">
          <FormInput label="Full name" theme="light" value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput label="Email" theme="light" value={user?.email || ""} disabled />
          <div className="flex items-center gap-4">
            <Button type="submit" loading={loading}>SAVE CHANGES</Button>
            {saved && <span className="text-green-500 text-sm font-semibold">✓ Saved</span>}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          { label: "Quotes requested", value: "0" },
          { label: "Consultations booked", value: "0" },
          { label: "Products saved", value: "0" },
        ].map((s) => (
          <div key={s.label} className="card-light p-5 text-center">
            <p className="text-2xl font-bold text-brand">{s.value}</p>
            <p className="text-black/50 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
