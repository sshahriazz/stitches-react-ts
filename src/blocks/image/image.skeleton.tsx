import React from "react";
import withDefaults from "utils/with-defaults";
import { CSS } from "theme/stitches.config";
import {
  StyledImageSkeleton,
  ImageSkeletonVariantsProps,
} from "./image.styles";
import clsx from "utils/clsx";
import { __DEV__ } from "utils/assertion";

interface Props {
  opacity: number;
  as?: keyof JSX.IntrinsicElements;
  css?: CSS;
  className?: string;
}

const defaultProps = {
  opacity: 0.5,
  className: "",
};

export type ImageSkeletonProps = Props &
  typeof defaultProps &
  ImageSkeletonVariantsProps;

const ImageSkeleton: React.FC<ImageSkeletonProps> = React.memo(
  ({ opacity, css, className, ...props }) => {
    return (
      <StyledImageSkeleton
        css={{ opacity, ...(css as any) }}
        className={clsx("nextui-image-skeleton", className)}
        {...props}
      />
    );
  }
);

if (__DEV__) {
  ImageSkeleton.displayName = "NextUI.ImageSkeleton";
}

ImageSkeleton.toString = () => ".nextui-image-skeleton";

export default withDefaults(ImageSkeleton, defaultProps);
