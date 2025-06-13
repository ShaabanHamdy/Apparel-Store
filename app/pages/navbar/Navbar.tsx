"use client";
import { useAppContext } from "../context/Context";
import Icons from "./Icons";
import Logo from "./Logo";
import MobileScreen from "./MobileScreen";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { state } = useAppContext();
  const style =
    state.theme === "dark"
      ? { backgroundColor: "#101828", color: "#FDFDFD" , border: "1px solid #2D3748" }
      : { backgroundColor: "#fff", color: "#111" };
  return (
    <nav style={style} className="w-[95vw] m-auto my-1 shadow-md rounded-lg  ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between p-3 items-center">
          {/* Left: Logo */}
          <div className="">
            <Logo />
          </div>

          {/* Center: Links */}
          <div  className="hidden md:flex space-x-6">
            <NavLinks />
          </div>
          {/* Search */}
          <div className="flex items-center space-x-3">
            <Icons />
          </div>
          {/* Mobile Menu */}
          <MobileScreen />
        </div>
      </div>
    </nav>
  );
}
