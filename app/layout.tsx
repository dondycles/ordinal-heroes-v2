import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Nav from "./components/Nav";
import AnnouncementBar from "./components/AnnouncementBar";
import Wallpaper from "./components/Wallpaper";

const inter = Kanit({ subsets: ["latin"], weight: ["200", "400", "900"] });

export const metadata: Metadata = {
  title: "HeroeZ",
  description: "Heroes in 6th Dimension.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-neutral bg-primary relative`}>
        <Nav />
        {children}
        <AnnouncementBar />
        <Wallpaper />
      </body>
    </html>
  );
}
