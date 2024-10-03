import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Girl Wallpaper Generator | AI-Powered Custom Wallpapers",
  description: "Create unique, high-quality anime girl wallpapers using advanced AI technology. Personalize your devices with custom-generated artwork instantly.",
  keywords: "anime girl wallpaper, AI wallpaper generator, custom anime wallpaper, anime art, wallpaper creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
