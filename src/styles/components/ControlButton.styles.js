import { Close, DateRange, Menu } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledControlButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !["buttonContext"].includes(prop),
})`
  &.MuiButtonBase-root {
    border-radius: 0;
    padding: 0;
    min-width: 0;
  }

  &.MuiButtonBase-root:hover {
    background-color: #f0f0f0;
  }

  &.MuiButtonBase-root:active {
    backgorund-color: #e0e0e0;
  }

  ${({ buttonContext }) => {
    switch (buttonContext) {
      case "modal":
        return `
  &.MuiButtonBase-root {
    position: absolute;
    top: 20px;
    right: 20px;
    
  }
        `;

      case "product-list":
        return `
  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    &.MuiButtonBase-root {
      margin-bottom: 5px;
    }
  }
        `;

      case "calendar":
        return `
  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    &.MuiButtonBase-root {
      margin-bottom: 4px;
    }
  }
        `;

      default:
        return null;
    }
  }}
`;

export const StyledCloseIcon = styled(Close).withConfig({
  shouldForwardProp: (prop) => !["iconContext"].includes(prop),
})`
  ${({ iconContext }) => {
    switch (iconContext) {
      case "modal":
        return `
  &.MuiSvgIcon-root {
    fill: black;
    font-size: 20px;
  }
    `;

      case "navigation":
        return `
  &.MuiSvgIcon-root {
    fill: #212121;
  }
        `;

      case "product-list":
        return `
  &.MuiSvgIcon-root {
    stroke: #9b9faa;
    strokewidth: 1px;
    fill: #9b9faa;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    &.MuiSvgIcon-root {
      font-size: 17px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    &.MuiSvgIcon-root {
      font-size: 20px;
    }
  }
        `;

      default:
        return null;
    }
  }}
`;

export const StyledMenuIcon = styled(Menu)`
  &.MuiSvgIcon-root {
    fill: #212121;
  }
`;

export const StyledDateRangeIcon = styled(DateRange)`
  &.MuiSvgIcon-root {
    font-size: 20px;
    fill: #9b9faa;
  }
`;
