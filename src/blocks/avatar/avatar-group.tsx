import React, { ReactNode } from "react";
import { CSS } from "theme/stitches.config";
import { ReactRef } from "utils/refs";
import { useDOMRef } from "utils/dom";
import { __DEV__ } from "utils/assertion";
import StyledAvatarGroup, {
  StyledAvatarGroupCount,
  AvatarGroupVariants,
} from "./avatar-group.styles";

interface Props {
  count?: number;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type AvatarGroupProps = Props &
  NativeAttrs &
  AvatarGroupVariants & { css?: CSS };

export const AvatarGroup = React.forwardRef(
  (props: AvatarGroupProps, ref: ReactRef<HTMLDivElement>) => {
    const { count, children, ...otherProps } = props;

    const domRef = useDOMRef(ref);

    return (
      <StyledAvatarGroup ref={domRef} {...otherProps}>
        {children}
        {count && (
          <StyledAvatarGroupCount className="trident-avatar-group-count">
            +{count}
          </StyledAvatarGroupCount>
        )}
      </StyledAvatarGroup>
    );
  }
);

if (__DEV__) {
  AvatarGroup.displayName = "Trident.AvatarGroup";
}

AvatarGroup.toString = () => ".trident-avatar-group";

export default AvatarGroup;
