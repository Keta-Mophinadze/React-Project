import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { AppReducer, initialState } from "./Reducer";
import { signInAction } from "./ActionCreators";
import { validToken } from "../Utility/Utility";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && validToken(token)) {
      dispatch(signInAction(token));
    }
  }, []);

  const AppState = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);
  return <AppContext.Provider value={AppState}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context) {
    return context;
  }
  throw new Error("404: The request is invalid, please try again!");
};

export default Provider;
