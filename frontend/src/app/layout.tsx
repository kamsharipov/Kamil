import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "../components/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Камиль Шарипов · Telegram эксперт",
  description:
    "Маркетолог, эксперт по чат-ботам, запуску клубов и курсов в Telegram. Автоворонки, автоматизация продаж, упаковка закрытых каналов под ключ.",
  openGraph: {
    title: "Камиль Шарипов · Telegram эксперт",
    description:
      "Маркетолог, эксперт по чат-ботам, запуску клубов и курсов в Telegram.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0e17",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full m-0 p-0 bg-[#0a0e17]">
        <div className="app-shell landing-grid-bg">
          <div className="app-inner">
            {children}
          </div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
