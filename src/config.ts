import { settingsType } from "types";
// import { version } from "../package.json";

const AppVersion: string = "0.1";

export const settings: settingsType = {
  isFluid: false,
  isRTL: false,
  isDark: false,
};
const appSettings = {
  AppVersion,
  settings,
};
export default appSettings;
