import React, { useMemo, PropsWithoutRef, RefAttributes } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import type {
  PressEvents,
  PressEvent,
  FocusableProps,
} from "@react-types/shared";
import type { AriaButtonProps } from "@react-types/button";
import type { FocusRingAria } from "@react-aria/focus";
import ButtonDrip from "utils/drip";
import { CSS } from "theme/stitches.config";
import { NormalColors } from "utils/prop-types";
import { filterPropsWithGroup, getCssColors } from "./utils";
import { useButtonGroupContext } from "./button-group-context";
import ButtonGroup from "./button-group";
import ButtonIcon from "./button-icon";
import clsx from "utils/clsx";
import useDrip from "hooks/use-drip";
import StyledButton, { ButtonVariantsProps } from "./button.styles";
import withDefaults from "utils/with-defaults";
import { useDOMRef } from "utils/dom";
import { __DEV__ } from "utils/assertion";
import createWarning from "hooks/use-warning/use-warning";

export interface Props extends PressEvents, FocusableProps, AriaButtonProps {
  light?: boolean;
  color?: NormalColors;
  flat?: boolean;
  animated?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  bordered?: boolean;
  auto?: boolean;
  ripple?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  // @deprecated
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode | undefined;
  iconLeftCss?: CSS;
  iconRightCss?: CSS;
}

const defaultProps = {
  ghost: false,
  bordered: false,
  ripple: true,
  animated: true,
  disabled: false,
  autoFocus: false,
  auto: false,
  className: "",
  type: "button",
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>;

interface IFocusRingAria extends FocusRingAria {
  focusProps: Omit<React.HTMLAttributes<HTMLElement>, keyof ButtonProps>;
}

export type ButtonProps = Props &
  NativeAttrs &
  Omit<ButtonVariantsProps, "isPressed" | "isHovered" | "isChildLess"> & {
    css?: CSS;
  };

const Button = React.forwardRef(
  (
    {
      as,
      css,
      iconLeftCss,
      iconRightCss,
      onClick,
      onPress,
      onPressStart,
      onPressEnd,
      onPressChange,
      onPressUp,
      ...btnProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    const groupConfig = useButtonGroupContext();
    const filteredProps = filterPropsWithGroup(btnProps, groupConfig);
    const cssColors = getCssColors(filteredProps);

    const {
      flat,
      children,
      disabled,
      animated,
      light,
      ripple,
      bordered,
      auto,
      borderWeight,
      icon,
      iconRight,
      ghost,
      autoFocus,
      className,
      ...props
    } = filteredProps;

    const handleDrip = (
      e: React.MouseEvent<HTMLButtonElement> | PressEvent
    ) => {
      if (animated && ripple && buttonRef.current) {
        onDripClickHandler(e);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleDrip(e);
      onClick?.(e);
    };

    const handlePress = (e: PressEvent) => {
      if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
        handleDrip(e);
        // TODO: take this out and deprecate onClick function for next release (only use the @react-aria/button impl)
        onClick?.(e as any);
      }
      onPress?.(e);
    };

    const buttonRef = useDOMRef(ref);
    const { buttonProps, isPressed } = useButton(
      {
        ...btnProps,
        onClick: handleClick,
        isDisabled: disabled,
        elementType: as,
        onPress: handlePress,
        onPressStart,
        onPressEnd,
        onPressChange,
        onPressUp,
      } as AriaButtonProps,
      buttonRef
    );

    const { hoverProps, isHovered } = useHover({ isDisabled: disabled });
    const { isFocused, isFocusVisible, focusProps }: IFocusRingAria =
      useFocusRing({ autoFocus });

    const { onClick: onDripClickHandler, ...dripBindings } = useDrip(
      false,
      buttonRef
    );

    if (__DEV__ && filteredProps.color === "gradient" && (flat || light)) {
      createWarning(
        "Using the gradient color on flat and light buttons will have no effect."
      );
    }
    const hasIcon = icon || iconRight;
    const isChildLess = React.Children.count(children) === 0;
    const isRight = Boolean(iconRight);

    const getState = useMemo(() => {
      if (isPressed) return "pressed";
      if (isHovered) return "hovered";
      return disabled ? "disabled" : "ready";
    }, [disabled, isHovered, isPressed]);

    const getIconCss = useMemo<any>(() => {
      if (isRight) return iconRightCss;
      return iconLeftCss;
    }, [isRight, iconRightCss, iconLeftCss]);

    return (
      <StyledButton
        as={as}
        ref={buttonRef}
        borderWeight={borderWeight}
        auto={auto}
        flat={flat}
        light={light}
        ghost={ghost}
        bordered={bordered || ghost}
        data-state={getState}
        animated={animated}
        isChildLess={isChildLess}
        isPressed={isPressed}
        isHovered={isHovered || (ghost && isFocused)}
        isFocusVisible={isFocusVisible && !disabled}
        className={clsx(
          "trident-button",
          `trident-button--${getState}`,
          className
        )}
        css={{
          ...(css as any),
          ...cssColors,
        }}
        {...mergeProps(buttonProps, focusProps, hoverProps, props)}
      >
        {React.Children.count(children) === 0 ? (
          <ButtonIcon
            isSingle
            isAuto={auto}
            isRight={isRight}
            css={getIconCss}
            isGradientButtonBorder={
              props.color === "gradient" && (bordered || ghost)
            }
          >
            {hasIcon}
          </ButtonIcon>
        ) : hasIcon ? (
          <>
            <ButtonIcon
              isSingle={false}
              isAuto={auto}
              isRight={isRight}
              css={getIconCss}
              isGradientButtonBorder={
                props.color === "gradient" && (bordered || ghost)
              }
            >
              {hasIcon}
            </ButtonIcon>
            <div
              className={clsx("trident-button-text", {
                "trident-button-text-right": isRight,
                "trident-button-text-left": !isRight,
              })}
            >
              {children}
            </div>
          </>
        ) : (
          <span className="trident-button-text">{children}</span>
        )}
        <ButtonDrip color="white" {...dripBindings} />
      </StyledButton>
    );
  }
);

type ButtonComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {
  Group: typeof ButtonGroup;
};

if (__DEV__) {
  Button.displayName = "NextUI.Button";
}

Button.toString = () => ".trident-button";

export default withDefaults(Button, defaultProps) as ButtonComponent<
  HTMLElement,
  ButtonProps
>;
