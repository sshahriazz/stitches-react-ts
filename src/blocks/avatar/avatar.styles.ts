import { styled, VariantProps } from "theme/stitches.config";
import { cssFocusVisible, sharedDialogPopup } from "theme/shared-css";

export const StyledAvatar = styled(
  "span",
  {
    dflex: "center",
    position: "relative",
    zIndex: "$1",
    boxSizing: "border-box",
    overflow: "hidden",
    verticalAlign: "top",
    cursor: "auto",
    transition: "transform 250ms ease 0ms, box-shadow 0.25s ease 0s",
    ".trident-avatar-bg": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "$2",
      transition: "$avatar",
      size: "100%",
    },
    "&:hover .trident-avatar-bg": {
      boxShadow: " inset 0 0 40px 0 rgb(0 0 0 / 14%)",
    },
    ".trident-avatar-img": {
      opacity: 0,
      zIndex: "$3",
      display: "flex",
      bg: "$background",
      transition: "transform 250ms ease 0ms, opacity 200ms ease-in 0ms",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    '&[data-state="ready"] .trident-avatar-img': {
      opacity: 1,
    },
    ".trident-avatar-icon": {
      display: "flex",
      position: "absolute",
      left: "50%",
      top: "50%",
      ta: "center",
      zIndex: "$2",
      transform: "translate(-50%, -50%)",
      whiteSpace: "nowrap",
      us: "none",
    },
    ".trident-avatar-text": {
      position: "absolute",
      zIndex: "$2",
      left: "50%",
      top: "50%",
      ta: "center",
      color: "$text",
      fontWeight: "$medium",
      transform: "translate(-50%, -50%) scale(0.65)",
      whiteSpace: "nowrap",
      us: "none",
    },
    "@motion": {
      transition: "none",
      ".trident-avatar-bg, .trident-avatar-img": {
        transition: "none",
      },
    },
    variants: {
      color: {
        default: {
          ".trident-avatar-bg": {
            bg: "$accents2",
          },
        },
        primary: {
          ".trident-avatar-bg": {
            bg: "$primary",
          },
        },
        secondary: {
          ".trident-avatar-bg": {
            bg: "$secondary",
          },
        },
        success: {
          ".trident-avatar-bg": {
            bg: "$success",
          },
        },
        warning: {
          ".trident-avatar-bg": {
            bg: "$warning",
          },
        },
        error: {
          ".trident-avatar-bg": {
            bg: "$error",
          },
        },
        gradient: {
          ".trident-avatar-bg": {
            bg: "$gradient",
          },
        },
      },
      textColor: {
        default: {
          ".trident-avatar-text": {
            color: "$text",
          },
        },
        white: {
          ".trident-avatar-text": {
            color: "$white",
          },
        },
        primary: {
          ".trident-avatar-text": {
            color: "$primary",
          },
        },
        secondary: {
          ".trident-avatar-text": {
            color: "$secondary",
          },
        },
        success: {
          ".trident-avatar-text": {
            color: "$success",
          },
        },
        warning: {
          ".trident-avatar-text": {
            color: "$warning",
          },
        },
        error: {
          ".trident-avatar-text": {
            color: "$error",
          },
        },
      },
      size: {
        xs: {
          $$avatarXs: "$space$9",
          sizeMin: "$$avatarXs",
          ".trident-avatar-text": {
            fontSize: "$sm",
          },
        },
        sm: {
          $$avatarSm: "$space$11",
          sizeMin: "$$avatarSm",
          ".trident-avatar-text": {
            fontSize: "$md",
          },
        },
        md: {
          $$avatarMd: "$space$14",
          sizeMin: "$$avatarMd",
          ".trident-avatar-text": {
            fontSize: "$lg",
          },
        },
        lg: {
          $$avatarLg: "$space$16",
          sizeMin: "$$avatarLg",
          ".trident-avatar-text": {
            fontSize: "$xl",
          },
        },
        xl: {
          $$avatarXl: "$space$18",
          sizeMin: "$$avatarXl",
          ".trident-avatar-text": {
            fontSize: "$xl2",
          },
        },
      },
      borderWeight: {
        light: {
          ".trident-avatar-img": {
            borderWidth: "$light",
          },
        },
        normal: {
          ".trident-avatar-img": {
            borderWidth: "$normal",
          },
        },
        bold: {
          ".trident-avatar-img": {
            borderWidth: "$normal",
          },
        },
        extrabold: {
          ".trident-avatar-img": {
            borderWidth: "$normal",
          },
        },
        black: {
          ".trident-avatar-img": {
            borderWidth: "$normal",
          },
        },
      },
      bordered: {
        true: {
          "&:hover:not(.only-text-avatar) .trident-avatar-bg": {
            opacity: "0.6",
          },
          ".trident-avatar-img": {
            borderStyle: "solid",
            borderColor: "$background",
          },
        },
      },
      stacked: {
        true: {
          ml: "-$5",
        },
      },
      pointer: {
        true: {
          cursor: "pointer",
        },
      },
      rounded: {
        true: {
          borderRadius: "$rounded",
          ".trident-avatar-img": {
            borderRadius: "$rounded",
          },
        },
      },
      squared: {
        true: {
          borderRadius: "$squared",
          ".trident-avatar-img": {
            borderRadius: "$squared",
          },
        },
      },
      zoomed: {
        true: {
          "&:hover .trident-avatar-img": {
            transform: "scale(1.125)",
          },
        },
      },
    },
    compoundVariants: [
      // bordered / borderWeight
      {
        bordered: true,
        borderWeight: "light",
        css: {
          padding: "calc($1/2)",
        },
      },
      {
        bordered: true,
        borderWeight: "normal",
        css: {
          padding: "$1",
        },
      },
      {
        bordered: true,
        borderWeight: "bold",
        css: {
          padding: "calc($2/1.5)",
        },
      },
      {
        bordered: true,
        borderWeight: "extrabold",
        css: {
          padding: "$2",
        },
      },
      {
        bordered: true,
        borderWeight: "black",
        css: {
          padding: "calc($3/1.5)",
        },
      },
      {
        rounded: true,
        squared: true,
        css: {
          borderRadius: "$squared",
          ".trident-avatar-img": {
            borderRadius: "$squared",
          },
        },
      },
    ],
    defaultVariants: {
      size: "md",
      rounded: true,
      color: "default",
      textColor: "default",
      borderWeight: "normal",
    },
  },
  cssFocusVisible,
  sharedDialogPopup
);

export type AvatarVariantsProps = VariantProps<typeof StyledAvatar>;

export default StyledAvatar;
