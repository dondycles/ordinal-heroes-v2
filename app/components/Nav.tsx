"use client";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import MenuBtn from "./MenuBtn";
export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <motion.nav className="fixed top-0 left-0 w-screen p-6 flex justify-between items-center max-h-24 h-full z-50">
      <p className="font-black flex items-start text-secondary">
        <span className="text-3xl mt-1">Heroe</span>
        <span className=" text-5xl block w-fit ">Z!</span>
      </p>
      <MenuBtn
        menuStatus={showMenu}
        toggleMenu={() => setShowMenu((prev) => !prev)}
      />
      <Menu menuState={showMenu} closeMenu={() => setShowMenu(false)} />
    </motion.nav>
  );
}
