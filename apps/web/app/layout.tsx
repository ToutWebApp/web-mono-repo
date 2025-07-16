
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Providers } from "./providers";
import "./globals.css";
import "../../../packages/ui/src/styles/globals.css";

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
        <Providers>
          <Header />
          <main className=''>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
