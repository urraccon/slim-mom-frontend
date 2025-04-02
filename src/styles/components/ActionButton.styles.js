import styled from "styled-components";
import { Button } from "@mui/material";
import { cssBreakpoints } from "../breakpoints";
import { Add } from "@mui/icons-material";

export const StyledCustomButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !["buttonContext", "iconName"].includes(prop),
})`
  &.MuiButtonBase-root {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.04em;
    text-transform: none;
    border-radius: 30px;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 0.2s ease;
    box-shadow: ${({ variant }) =>
      variant === "contained"
        ? "0 4px 10px 0 rgba(255, 132, 45, 0.5)"
        : "none"};
    background-color: ${({ variant }) =>
      variant === "contained" ? "#fc842d" : "white"};
  }

  &.MuiButtonBase-root:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }

  &.MuiButtonBase-root:active {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }

  ${({ buttonContext }) => {
    switch (buttonContext) {
      case "calories-form":
        return `
&.MuiButtonBase-root {
    padding: 13px 25px;
    line-height: 1.2;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    &.MuiButtonBase-root {
      align-self: center;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    &.MuiButtonBase-root {
      align-self: start;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    &.MuiButtonBase-root {
      margin-left: 54.5%;
    }
  }
    `;

      case "product-form-icon-button":
        return `
  &.MuiButtonBase-root {
    min-width: 0;
    padding: 12.5px;
    align-self: center;
  }
    `;

      case "product-form-text-button":
        return `
  &.MuiButtonBase-root {
    width: 176px;
    padding: 0;
    line-height: 1.3;
    height: 44px;
  }
        `;

      case "daily-calories-modal":
        return `
  &.MuiButtonBase-root {
    padding: 13px 25px;
    line-height: 1.2;
  }
    `;

      case "authentication-form-contained-button":
        return `
  &.MuiButtonBase-root {
    padding: 0;
    width: 182px;
    height: 44px;
    line-height: 1.3;
  }
    `;

      case "authentication-form-outlined-button":
        return `
  &.MuiButtonBase-root {
    border: 2px solid #fc842d;
    color: #fc842d;
    padding: 0;
    width: 182px;
    height: 44px;
    line-height: 1.3;
  }
        `;

      default:
        return null;
    }
  }};
`;

export const StyledAddIcon = styled(Add)`
  &.MuiSvgIcon-root {
    font-size: 23px;
  }
`;
