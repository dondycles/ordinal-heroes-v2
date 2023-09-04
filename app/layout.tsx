import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Nav from "./components/Nav";
import AnnouncementBar from "./components/AnnouncementBar";
import Image from "next/image";
import wallpaper from "../public/lg-wallpaper.webp";

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
        <Image
          className="fixed top-0 bottom-0 left-0 right-0 object-cover w-screen h-screen z-1"
          src={wallpaper}
          alt="HeroeZ"
          width={3840}
          height={2160}
          quality={100}
          priority
        />
      </body>
    </html>
  );
}
