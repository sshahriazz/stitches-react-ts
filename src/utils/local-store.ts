export const getItemFromStore: (
  key: string,
  defaultValue: any,
  store?: Storage
) => any = function getItemFromStore(
  key: string,
  defaultValue: string,
  store: Storage = localStorage
) {
  try {
    return JSON.parse(store.getItem(key)!) || defaultValue;
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const setItemToStore: (
  key: string,
  payload: any,
  store?: Storage
) => void = function setItemToStore(
  key: string,
  payload,
  store = localStorage
) {
  store.setItem(key, JSON.stringify(payload));
};
