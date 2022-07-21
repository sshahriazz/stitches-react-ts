import { settings } from "config";
import { PayloadType, settingsType } from "types";
import { setItemToStore } from "utils/local-store";

function configReducer(
  state: settingsType,
  action: {
    type: string;
    payload: PayloadType;
  }
): settingsType {
  const { type, payload } = action;
  switch (type) {
    case "SET_CONFIG":
      if (payload.setInStore) {
        setItemToStore(payload.key, payload.value);
      }
      return {
        ...state,
        [payload.key]: payload.value,
      };
    case "REFRESH":
      return {
        ...state,
      };
    case "RESET":
      localStorage.clear();
      return {
        ...state,
        ...settings,
      };
    default:
      return state;
  }
}
export default configReducer;
