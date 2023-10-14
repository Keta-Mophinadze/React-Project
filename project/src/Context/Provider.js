import React, { createContext, useContext, useReducer } from "react";
import { AppReducer, initialState } from "./Reducer";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context) {
    return context;
  }
  throw new Error("404: The request is invalid, please try again!");
};

export default Provider;
