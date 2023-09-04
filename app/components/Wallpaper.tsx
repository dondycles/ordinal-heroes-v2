"use client";
import Image from "next/image";
import lgwallpaper from "@/public/lg-wallpaper.webp";
import smwallpaper from "@/public/sm-wallpaper.webp";
import { useEffect, useState } from "react";
export default function Wallpaper() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      setWindowSize({ width: 0, height: 0 });
    };
  }, []);

  return (
    <Image
      className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen object-cover"
      src={windowSize.width > 620 ? lgwallpaper : smwallpaper}
      alt="HeroeZ"
      quality={100}
      priority
    />
  );
}
