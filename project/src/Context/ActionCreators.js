import AppContextActions from "./Actions";

export function receivedData(payload) {
  return {
    type: AppContextActions.fetchReceivedData,
    payload,
  };
}

export function startPending() {
  return {
    type: AppContextActions.startPending,
  };
}

export function itemFetchError(payload) {
  return {
    type: AppContextActions.itemFetchError,
    payload,
  };
}

export function signInAction(payload) {
  return {
    type: AppContextActions.Sign_In,
    payload,
  };
}

export function signOut() {
  return {
    type: AppContextActions.Sign_Out,
  };
}
