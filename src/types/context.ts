import { Dispatch } from "react";
import { ObjectType } from "types";

export interface settingsType {
  isFluid: boolean;
  isRTL: boolean;
  isDark: boolean;
}
export interface PayloadType {
  key: string;
  value: string | boolean | ObjectType;
  setInStore?: boolean;
}
export interface IAppContext {
  config: settingsType;
  setConfig: (key: string, value: any) => any;
  configDispatch: Dispatch<{
    type: string;
    payload: PayloadType;
  }>;
}
