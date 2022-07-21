import React from "react";
import { StyledLinkIcon } from "./link.styles";

export const LinkIcon: React.FC<{}> = () => {
  return (
    <StyledLinkIcon
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      className="trident-link-icon"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </StyledLinkIcon>
  );
};

LinkIcon.toString = () => ".trident-link-icon";

export default React.memo(LinkIcon);
