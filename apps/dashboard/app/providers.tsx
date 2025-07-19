"use client";

import React from "react";
import { QueryProvider } from "@repo/api-client";
import { UserProvider } from "@repo/auth";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <QueryProvider>{children}</QueryProvider>
    </UserProvider>
  );
}
