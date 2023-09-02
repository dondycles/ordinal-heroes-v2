import { motion, AnimatePresence } from "framer-motion";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

export default function MenuBtn({
  toggleMenu,
  menuStatus,
}: {
  toggleMenu: () => void;
  menuStatus: boolean;
}) {
  return (
    <button
      onClick={() => toggleMenu()}
      className={`z-[51] btn flex items-center gap-2 max-w-[100px] w-screen ${
        menuStatus
          ? " btn-secondary hover:bg-secondary-focus text-primary "
          : "btn-outline hover:bg-secondary-focus border-secondary hover:border-secondary-focus text-secondary"
      }`}
    >
      <AnimatePresence>
        {menuStatus ? (
          <motion.p
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 25, opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={String(menuStatus)}
            className="flex items-center gap-1 absolute"
          >
            CLOSE <TbPlayerTrackNextFilled />
          </motion.p>
        ) : (
          <motion.p
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -25, opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={String(menuStatus)}
            className="flex items-center gap-1 absolute"
          >
            <TbPlayerTrackPrevFilled />
            MENU
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}
