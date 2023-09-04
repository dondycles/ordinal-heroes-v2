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
    console.log(windowSize);
  };

  useEffect(() => {
    // Add event listener for the 'resize' event
    window.addEventListener("resize", handleResize);

    // Initial size

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      setWindowSize({ width: 0, height: 0 });
    };
  }, []);

  return (
    <>
      {windowSize.width > 620 ? (
        <Image
          className="fixed top-0 bottom-0 left-0 right-0 object-cover w-screen h-screen z-1"
          src={lgwallpaper}
          alt="HeroeZ"
          width={3840}
          height={2160}
          quality={100}
          priority
        />
      ) : (
        <Image
          className="fixed top-0 bottom-0 left-0 right-0 object-cover w-screen h-screen z-1"
          src={smwallpaper}
          alt="HeroeZ"
          width={3840}
          height={2160}
          quality={100}
          priority
        />
      )}
    </>
  );
}
