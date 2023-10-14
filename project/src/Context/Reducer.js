import AppContextActions from "./Actions";

export const initialState = {
  items: [],
  itemFetching: false,
  itemFetchingError: null,
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

    default:
      return state;
  }
};
