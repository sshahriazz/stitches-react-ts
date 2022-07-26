import React, { useEffect, useMemo, useState } from "react";
import type { PropsWithoutRef, RefAttributes } from "react";
import { ObjectFit } from "utils/prop-types";
import ImageSkeleton from "./image.skeleton";
import useRealShape from "hooks/use-real-shape";
import useCurrentState from "hooks/use-current-state";
import useResize from "hooks/use-resize";
import { ReactRef } from "utils/refs";
import { useDOMRef } from "utils/dom";
import { __DEV__ } from "utils/assertion";
import { CSS } from "theme/stitches.config";
import {
  StyledImage,
  StyledImageContainer,
  ImageContainerVariantProps,
} from "./image.styles";
import clsx from "utils/clsx";

interface Props {
  src: string;
  autoResize?: boolean;
  showSkeleton?: boolean;
  width?: number | string;
  height?: number | string;
  maxDelay?: number;
  objectFit?: ObjectFit;
  className?: string;
  css?: CSS;
  containerCss?: CSS;
}

type NativeAttrs = Omit<React.ImgHTMLAttributes<unknown>, keyof Props>;

export type ImageProps = Props & NativeAttrs & ImageContainerVariantProps;

export const Image = React.forwardRef(
  (props: ImageProps, ref: ReactRef<HTMLImageElement>) => {
    const {
      src,
      width,
      height,
      showSkeleton: showSkeletonProp = true,
      className,
      maxDelay = 3000,
      autoResize = false,
      objectFit = "scale-down",
      containerCss,
      css,
      ...otherProps
    } = props;

    const imageRef = useDOMRef(ref);

    const [loading, setLoading] = useState<boolean>(true);
    const [showSkeleton, setShowSkeleton] = useState<boolean>(showSkeletonProp);

    const { w, h } = useMemo(() => {
      return {
        w: width ? (typeof width === "number" ? `${width}px` : width) : "auto",
        h: height
          ? typeof height === "number"
            ? `${height}px`
            : height
          : "auto",
      };
    }, [width, height]);

    const [zoomHeight, setZoomHeight, zoomHeightRef] =
      useCurrentState<string>(h);
    const [shape, updateShape] = useRealShape(imageRef);

    const showAnimation = showSkeletonProp && !!width && !!height;

    const onImageLoaded = () => {
      setLoading(false);
    };

    useEffect(() => {
      if (!imageRef.current) return;
      if (imageRef.current.complete) {
        setLoading(false);
        setShowSkeleton(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (showAnimation) {
          setShowSkeleton(false);
        }
        clearTimeout(timer);
      }, maxDelay);
      return () => clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    /**
     * On mobile devices, the render witdth may be less than CSS width value.
     * If the image is scaled, set the height manually.
     * This is to ensure the aspect ratio of the image.
     *
     * If the image is auto width, ignore all.
     */
    useEffect(() => {
      if (!autoResize) return;
      const notLoaded = shape.width === 0;
      const isAutoZoom = zoomHeightRef.current === "auto";
      if (notLoaded || !width || !height) return;
      if (shape.width < width) {
        !isAutoZoom && setZoomHeight("auto");
      } else {
        isAutoZoom && setZoomHeight(h);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shape, width]);

    useResize(() => {
      if (!autoResize) return;
      updateShape();
    });

    const getState = useMemo(() => {
      return loading ? "loading" : "ready";
    }, [loading]);

    return (
      <StyledImageContainer
        className={clsx(
          "trident-image-container",
          `trident-image--${getState}`,
          className
        )}
        data-state={getState}
        ready={!loading || showSkeleton}
        css={{
          width: w,
          height: zoomHeight,
          ...(containerCss as any),
        }}
      >
        {showSkeleton && <ImageSkeleton opacity={1} />}
        <StyledImage
          ref={imageRef}
          className="trident-image"
          width={width}
          height={height}
          onLoad={onImageLoaded}
          src={src}
          data-state={getState}
          alt={props.alt || ""}
          css={{
            objectFit,
            ...(css as any),
          }}
          {...otherProps}
        />
      </StyledImageContainer>
    );
  }
);

if (__DEV__) {
  Image.displayName = "Trident.Image";
}

Image.toString = () => ".trident-image";

type MemoImageComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

export default React.memo(Image) as MemoImageComponent<
  HTMLImageElement,
  ImageProps
>;
