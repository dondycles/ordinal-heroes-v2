import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Nav from "./components/Nav";
import AnnouncementBar from "./components/AnnouncementBar";

const inter = Kanit({ subsets: ["latin"], weight: ["200", "400", "900"] });

export const metadata: Metadata = {
  title: "Ordinal Heroes",
  description: "Unleash your inner hero.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-neutral`}>
        <Nav />
        {children}
        <AnnouncementBar />
      </body>
    </html>
  );
}
