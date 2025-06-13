type State = {
  language: string;
  currency: string;
  langOpen: boolean;
  currOpen: boolean;
  selectedLang: string;
  selectedCurr: string;
  search: string;
  theme: "light" | "dark";
  wishlist: number[];
  cart: number[];
};

type Action =
  | { type: "SET_LANGUAGE"; payload: string }
  | { type: "SET_CURRENCY"; payload: string }
  | { type: "TOGGLE_LANG_OPEN" }
  | { type: "TOGGLE_CURR_OPEN" }
  | { type: "SET_SELECTED_LANG"; payload: string }
  | { type: "SET_SELECTED_CURR"; payload: string }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_THEME"; payload: "light" | "dark" }
  | { type: "TOGGLE_WISHLIST"; payload: number }
  | { type: "TOGGLE_CART"; payload: number };

export const initialState: State = {
  language: "en",
  currency: "EGP",
  langOpen: false,
  currOpen: false,
  selectedLang: "en",
  selectedCurr: "EGP",
  search: "",
  theme: "light",
  wishlist: [],
  cart: [],
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_CURRENCY":
      return { ...state, currency: action.payload };
    case "TOGGLE_LANG_OPEN":
      return { ...state, langOpen: !state.langOpen };
    case "TOGGLE_CURR_OPEN":
      return { ...state, currOpen: !state.currOpen };
    case "SET_SELECTED_LANG":
      return { ...state, selectedLang: action.payload };
    case "SET_SELECTED_CURR":
      return { ...state, selectedCurr: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "TOGGLE_WISHLIST":
      return state.wishlist.includes(action.payload)
        ? {
            ...state,
            wishlist: state.wishlist.filter((id) => id !== action.payload),
          }
        : { ...state, wishlist: [...state.wishlist, action.payload] };
    case "TOGGLE_CART":
      return state.cart.includes(action.payload)
        ? { ...state, cart: state.cart.filter((id) => id !== action.payload) }
        : { ...state, cart: [...state.cart, action.payload] };
    // ...other cases

    default:
      return state;
  }
}

export type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
