"use client";

import { createContext, useReducer } from "react";

interface SearchState {
  query: string;
}

interface SearchAction {
  type: string;
  payload: any;
}
export const SearchContext = createContext<
  | {
      state: SearchState;
      dispatch: React.Dispatch<SearchAction>;
    }
  | undefined
>(undefined);

const initialState = {
  query: "",
};

const reducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

const SearchProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
