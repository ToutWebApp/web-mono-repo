import type { Metadata } from "next";
import { Providers } from "./providers";
import DashboardLayoutWrapper from "./dashboard-layout-wrapper";
import "../../../packages/ui/src/styles/globals.css";

export const metadata: Metadata = {
  title: "Tout Dashboard",
  description: "Dashboard for Tout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DashboardLayoutWrapper>
            {children}
          </DashboardLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}