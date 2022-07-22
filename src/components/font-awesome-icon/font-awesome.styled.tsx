import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "theme";

export const FontAwesome = styled(FontAwesomeIcon, {
  // px: "0",
  // py: "0",
  // mx: "0",
  // my: "0",
  variants: {
    size: {
      base: { fontSize: "$base" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      xl2: { fontSize: "$xl2" },
    },
    color: {
      current: { color: "currentColor" },
      base: { color: "$accents8" },
      dark: { color: "$accents9" },
      primary: { color: "$primary" },
      secondary: { color: "$secondary" },
      success: { color: "$success" },
      error: { color: "$error" },
    },
  },
  defaultVariants: {
    size: "md",
    color: "current",
  },
});
