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
