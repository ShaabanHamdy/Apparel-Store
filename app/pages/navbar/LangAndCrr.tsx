import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import EG_flag from "../../images/EG_flag.webp";
import EN_flag from "../../images/EN_Flag.webp";
import sar_currency from "../../images/sar_currency.webp";
import uae_currency from "../../images/uae_currency.webp";
import us_currency from "../../images/us_currency.webp";
import { useAppContext } from "../context/Context";

const LangAndCrr = () => {
  const CURRENCIES = [
    {
      code: "EGP",
      label: "EGP",
      flag: <Image src={EG_flag} alt="EGP_currency" width={20} height={14} />,
    },
    {
      code: "USD",
      label: "USD",
      flag: (
        <Image src={us_currency} alt="USD_currency" width={20} height={14} />
      ),
    },
    {
      code: "SAR",
      label: "SAR",
      flag: (
        <Image src={sar_currency} alt="SAR_currency" width={20} height={14} />
      ),
    },
    {
      code: "AED",
      label: "AED",
      flag: (
        <Image src={uae_currency} alt="AED_currency" width={20} height={14} />
      ),
    },
  ];

  const LANGUAGES = [
    {
      code: "en",
      label: "English",
      flag: <Image src={EN_flag} alt="English" width={20} height={14} />,
    },
    {
      code: "ar",
      label: "العربية",
      flag: <Image src={EG_flag} alt="Arabic" width={20} height={14} />,
    },
  ];

  const { state, dispatch } = useAppContext();

  // Find the selected language and currency objects
  const selectedLang =
    LANGUAGES.find((l) => l.code === state.selectedLang) || LANGUAGES[0];
  const selectedCurr =
    CURRENCIES.find((c) => c.code === state.selectedCurr) || CURRENCIES[0];
  // ===========================================================

  return (
    <>
      <button
        className={`flex items-center justify-between border border-gray-200  w-full cursor-pointer px-2 py-1  rounded 
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white  hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-300 "
    }
  `}
        onClick={() => dispatch({ type: "TOGGLE_LANG_OPEN" })}
      >
        <div className="flex items-center  w-full ">
          Language
          <IoMdArrowDropdown className="ml-1" />
        </div>
        <span className="text-sm mx-1">{selectedLang.flag}</span>
        <span className="text-sm">{selectedLang.label}</span>
      </button>
      {state.langOpen && (
        <div
          className={`w-32  border rounded shadow z-20 
    ${state.theme === "dark" ? "bg-gray-900 " : "bg-white "}
  `}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`flex items-center  w-full px-3 py-2 cursor-pointer  gap-2
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white  hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-300 "
    }
  `}
              onClick={() => {
                dispatch({ type: "SET_SELECTED_LANG", payload: lang.code });
                dispatch({ type: "TOGGLE_LANG_OPEN" });
                dispatch({ type: "SET_LANGUAGE", payload: lang.code });
              }}
            >
              {lang.flag}
              {lang.label}
            </button>
          ))}
        </div>
      )}
      <button
        className={`flex items-center justify-between border border-gray-200  w-full cursor-pointer px-2 py-1  rounded
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white  hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-300 "
    }
  `}
        onClick={() => dispatch({ type: "TOGGLE_CURR_OPEN" })}
      >
        <div className="flex items-center  w-full ">
          Currency
          <IoMdArrowDropdown className="ml-1" />
        </div>
        {selectedCurr.flag}
        <span className="text-sm mx-1">{selectedCurr.label}</span>
      </button>
      {state.currOpen && (
        <div
          className={`w-32 bg-white border rounded shadow z-20
    ${state.theme === "dark" ? "bg-gray-900" : "bg-white "}
  `}
        >
          {CURRENCIES.map((curr) => (
            <button
              key={curr.code}
              className={`flex items-center w-full gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white  hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-300 "
    }
  `}
              onClick={() => {
                dispatch({ type: "SET_SELECTED_CURR", payload: curr.code });
                dispatch({ type: "TOGGLE_CURR_OPEN" });
                dispatch({ type: "SET_CURRENCY", payload: curr.code });
              }}
            >
              {curr.flag}
              {curr.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default LangAndCrr;
