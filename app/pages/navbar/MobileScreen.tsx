import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useAppContext } from "../context/Context";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LangAndCrr from "./LangAndCrr";
import NavLinks from "./NavLinks";

// Custom hook to detect screen size

const MobileScreen = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { state, dispatch } = useAppContext();

  // Animation variants
  const variants = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <div className="relative ">
      <button
        className="p-2 ml-2 cursor-pointer w-full flex justify-end z-40 relative"
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-29 right-0 z-10 w-96"
          >
            <div
              className={`flex flex-col  justify-center space-y-2 px-4 py-2  border rounded-md 
    ${state.theme === "dark" ? "bg-gray-900 " : "bg-white  "}
  `}
            >
              <div className="md:hidden flex flex-col">
                <NavLinks />
              </div>
              <div className="space-y-2">
                <LangAndCrr />
              </div>
              <div
                className={`flex items-center justify-between border rounded px-2 py-1 mt-2  cursor-pointer
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white  hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-300 "
    }
  `}
              >
                <span>My Profile</span>

                <FaRegUser className="text-xl" />
              </div>
              <div>
                <ThemeToggle />
              </div>
              <div
                className={` gap-2 flex items-center border rounded px-2 py-1 mb-3 mt-2" ${
                  state.theme === "dark"
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-white text-black hover:bg-gray-300"
                }`}
              >
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search..."
                  value={state.search}
                  onChange={(e) =>
                    dispatch({ type: "SET_SEARCH", payload: e.target.value })
                  }
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileScreen;
