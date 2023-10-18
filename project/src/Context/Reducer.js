import { parseToken, toggleStorage } from "../Utility/Utility";
import AppContextActions from "./Actions";

export const initialState = {
  items: [],
  itemFetching: false,
  itemFetchingError: null,
  isUserLoggedIn: false,
  user: {},
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case AppContextActions.fetchReceivedData: {
      return {
        ...state,
        items: action.payload,
        itemFetching: false,
      };
    }
    case AppContextActions.startPending: {
      return { ...state, itemFetching: true };
    }
    case AppContextActions.itemFetchError: {
      return { ...state, itemFetchError: action.payload, itemFetching: false };
    }
    case AppContextActions.Sign_In: {
      const token = action.payload;
      const user = parseToken(token);
      toggleStorage(token);
      return {
        ...state,
        isUserLoggedIn: true,
        user,
      };
    }

    case AppContextActions.Sign_Out: {
      toggleStorage();
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    }

    default:
      return state;
  }
};
