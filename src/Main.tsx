import { settings } from "config";
import AppContext from "context/Context";
import React, { FC, ReactNode, useReducer } from "react";
import configReducer from "reducers/configReducer";
import { createTheme } from "theme";
import { SSRThemeProvider } from "theme/ssr-provider";
import ThemeProvider from "theme/ThemeProvider";
import { ObjectType, settingsType } from "types";
import { getItemFromStore } from "utils/local-store";

const darkTheme = createTheme({ type: "dark" });
const lightTheme = createTheme({ type: "light" });

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  const configState: settingsType = {
    isFluid: getItemFromStore("isFluid", settings.isFluid) as boolean,
    isRTL: getItemFromStore("isRTL", settings.isRTL) as boolean,
    isDark: getItemFromStore("isDark", settings.isDark) as boolean,
  };

  const [config, configDispatch] = useReducer(configReducer, configState);

  const setConfig: any = function setConfig(
    key: string,
    value: string | boolean | ObjectType
  ) {
    configDispatch({
      type: "SET_CONFIG",
      payload: {
        key,
        value,
        setInStore: ["isFluid", "isRTL", "isDark"].includes(key),
      },
    });
  };

  return (
    <AppContext.Provider value={{ config, setConfig, configDispatch }}>
      <SSRThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </SSRThemeProvider>
    </AppContext.Provider>
  );
};

export default React.memo(Main);
