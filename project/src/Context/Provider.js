import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AppReducer, initialState } from "./Reducer";
import { fetchItems } from "../API/Items";
import { itemFetchError, receivedData, startPending } from "./ActionCreators";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    dispatch(startPending());
    fetchItems()
      .then((data) => {
        dispatch(receivedData(data));
      })
      .catch((err) => {
        dispatch(itemFetchError(err.message));
      });
  }, []);

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
