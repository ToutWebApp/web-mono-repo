import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../../../packages/ui/src/styles/globals.css"; // Import shadcn/ui styles

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Tout",
  description:
    "Get the quality and reliability of agencies at the price and speed of a freelancer for the services your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
