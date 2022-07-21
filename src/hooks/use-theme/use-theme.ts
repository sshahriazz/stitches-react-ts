import React from "react";
import ThemeContext from "theme/theme-context";
import { TridentThemeContext } from "theme/types";

const useTheme = (): TridentThemeContext =>
  React.useContext<TridentThemeContext>(ThemeContext);

export default useTheme;
