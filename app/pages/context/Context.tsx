"use client";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { AppContextType, initialState, reducer } from "./ContextType";
// import axios from "axios";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   ===========================================================================
  
  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      dispatch({ type: "SET_THEME", payload: saved });
    }
  }, []);
  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
    // Optionally: set a cookie or token here if needed
  }, [state.theme]);
// In your ThemeToggle or context effect
useEffect(() => {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(state.theme);
}, [state.theme]);
  // Apply theme class to <html>
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    }
  }, [state.theme]);

  
  //   ===========================================================================
  // Send search to API when it changes (debounced)
  //   useEffect(() => {
  //     if (state.search.trim() === "") return;
  //     const timeout = setTimeout(() => {
  //       axios.post("/api/search", { search: state.search }).catch(console.error);
  //     }, 500); // debounce 500ms
  //     return () => clearTimeout(timeout);
  //   }, [state.search]);

  //   ===========================================================================
  // Send preferences to API when selectedLang or selectedCurr changes
  //   useEffect(() => {
  //     const sendPreferences = async () => {
  //       try {
  //         await axios.post("/api/preferences", {
  //           language: state.selectedLang,
  //           currency: state.selectedCurr,
  //         });
  //       } catch (error) {
  //         // Optionally handle error
  //         console.error("Failed to send preferences", error);
  //       }
  //     };
  //     sendPreferences();
  //   }, [state.selectedLang, state.selectedCurr]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
