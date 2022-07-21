import { settings } from "config";
import { createContext } from "react";
import { IAppContext } from "types";

export const AppContext = createContext<IAppContext>({
  config: settings,
  setConfig: () => {},
  configDispatch: () => {},
});

export const ProductContext = createContext<any>({ products: [] });
export default AppContext;
