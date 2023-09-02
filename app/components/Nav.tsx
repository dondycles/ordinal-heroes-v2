"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Menu from "./Menu";
import MenuBtn from "./MenuBtn";
import Curtain from "./Curtain";
export default function Nav() {
  const pathname = usePathname();
  const route = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [isNavigated, setIsNavigated] = useState(true);
  const [navigatingTo, setNavigatingTo] = useState(pathname);
  useEffect(() => {
    if (pathname === navigatingTo) {
      setIsNavigated(true);
    } else setIsNavigated(false);
  }, [pathname, navigatingTo]);
  return (
    <motion.nav className="fixed top-0 left-0 w-screen p-6 flex justify-between items-center max-h-24 h-full z-50">
      {/* <p className="font-black flex items-start text-secondary">
        <span className="text-3xl mt-1">Heroe</span>
        <span className=" text-5xl block w-fit ">Z!</span>
      </p> */}
      <div>
        <img
          className=" aspect-square h-[64px]"
          src="/logo256.png"
          alt="HeroeZ"
        />
      </div>
      <div className="text-xs">
        <p>Is Navigating To: {navigatingTo}</p>
        <p>Is Navigated?: {String(isNavigated)}</p>
      </div>

      <MenuBtn
        menuStatus={showMenu}
        toggleMenu={() => setShowMenu((prev) => !prev)}
      />
      <Curtain
        navigate={() => {
          route.push(navigatingTo);
        }}
        isNavigating={!isNavigated}
      />
      <Menu
        navigateTo={(pathname) => {
          setNavigatingTo(pathname);
        }}
        menuState={showMenu}
        closeMenu={() => setShowMenu(false)}
      />
    </motion.nav>
  );
}
