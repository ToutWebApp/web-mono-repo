// apps/dashboard/app/dashboard-layout-wrapper.tsx
"use client";

import { useUser } from "@repo/auth";
import { useEffect } from "react";
import { Sidebar } from "../components/home/Sidebar";


export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to main domain login
      // window.location.href = "http://localhost:3000/auth/login";
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirecting
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}