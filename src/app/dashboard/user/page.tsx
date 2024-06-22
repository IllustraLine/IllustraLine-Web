// src/app/dashboard/[username]/page.tsx
import React from "react";
import { useRouter } from "next/router";

export default function UserDashboard() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>Dashboard for User: {username}</h1>
      {/* Konten dashboard lainnya */}
    </div>
  );
}
