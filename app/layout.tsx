import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Girl Wallpaper Generator | Create Beautiful Anime Girl Art",
  description: "Generate beautiful anime girl wallpapers instantly. Create unique, high-quality anime girl art for your devices. Free anime girl wallpaper generator powered by AI.",
  alternates: {
    canonical: 'https://www.anime-girl.net', // 请替换为您的实际域名
  },
  openGraph: {
    title: "Create Beautiful Anime Girl Wallpapers Instantly",
    description: "Generate unique and stunning anime girl wallpapers with our AI-powered tool. Perfect for anime girl fans!",
    images: ['/og-image.jpg'], // 记得添加一个相关的预览图
  },
  twitter: {
    card: 'summary_large_image',
    title: "Create Beautiful Anime Girl Wallpapers",
    description: "Generate unique anime girl wallpapers instantly with AI technology",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
