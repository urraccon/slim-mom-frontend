import { Close, DateRange, Menu, MoreVert } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled, { css } from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledControlButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !["buttonType"].includes(prop),
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

  ${({ buttonType }) => {
    switch (buttonType) {
      case "modal":
        return css`
          &.MuiButtonBase-root {
            position: absolute;
            top: 20px;
            right: 20px;
          }
        `;

      case "action-menu":
        return css`
          &.MuiButtonBase-root {
            min-width: 20px;
          }

          @media screen and (max-width: ${cssBreakpoints.lengths
              .largeMobileMax}) {
            &.MuiButtonBase-root {
              margin: 0 12px 5px 0;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
            &.MuiButtonBase-root {
              margin-right: 40px;
            }
          }
        `;

      case "calendar":
        return css`
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
  shouldForwardProp: (prop) => !["iconType"].includes(prop),
})`
  ${({ iconType }) => {
    switch (iconType) {
      case "modal":
        return css`
          &.MuiSvgIcon-root {
            fill: #212121;
            font-size: 20px;
          }
        `;

      case "navigation":
        return css`
          &.MuiSvgIcon-root {
            fill: #212121;
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

export const StyledMoreVertIcon = styled(MoreVert)`
  &.MuiSvgIcon-root {
    stroke: #9b9faa;
    stroke-width: 1px;
    fill: #9b9faa;
    font-size: 20px;
  }
`;
