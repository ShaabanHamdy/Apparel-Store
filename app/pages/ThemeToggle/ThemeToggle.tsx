import { FaMoon, FaSun } from "react-icons/fa";
import { useAppContext } from "../context/Context";

const ThemeToggle = () => {
  const { state, dispatch } = useAppContext();
  const isDark = state.theme === "dark";

  return (
    <button
      className={`flex items-center justify-between border   w-full cursor-pointer px-2 py-1  rounded 
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white  hover:bg-gray-800 border-gray-100 "
        : "bg-white text-black hover:bg-gray-300 "
    }
  `}
      // className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"

      onClick={() =>
        dispatch({ type: "SET_THEME", payload: isDark ? "light" : "dark" })
      }
    >
      {isDark ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};

export default ThemeToggle;
