import { Button } from "@mui/material";
import styled, { css } from "styled-components";
import { cssBreakpoints } from "../breakpoints";
import { KeyboardReturn } from "@mui/icons-material";

export const StyledCustomReturnButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !["buttonType"].includes(prop),
})`
  &.MuiButtonBase-root {
    border-radius: 0;
    justify-content: start;
  }

  &.MuiButtonBase-root:hover {
    background-color: #dde0e3;
  }

  &.MuiButtonBase-root:active {
    background-color: #c6cace;
  }

  ${({ buttonType }) => {
    switch (buttonType) {
      case "daily-calories":
        return css`
          &.MuiButtonBase-root {
            width: 87.5%;
            height: 40px;
            background-color: #eff1f3;
            max-width: 450px;
            box-sizing: content-box;
          }

          @media screen and (max-width: ${cssBreakpoints.lengths
              .smallMobileMax}) {
            &.MuiButtonBase-root {
              padding: 0 6.25%;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths
              .mediumMobileMin}) {
            &.MuiButtonBase-root {
              padding: 0 calc((100% - 450px) / 2);
            }
          }
        `;

      case "add-product-form":
      case "edit-product-form":
        return css`
          &.MuiButtonBase-root {
            width: 40.62%;
            height: inherit;
          }

          @media screen and (max-width: ${cssBreakpoints.lengths
              .smallMobileMax}) {
            &.MuiButtonBase-root {
              padding: 0 0 0 6.25%;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths
              .mediumMobileMin}) {
            &.MuiButtonBase-root {
              padding: 0 0 0 calc((100% - 450px) / 2);
            }
          }
        `;

      default:
        return null;
    }
  }}
`;

export const StyledReturnIcon = styled(KeyboardReturn)`
  &.MuiSvgIcon-root {
    font-size: 15px;
    stroke: black;
    stroke-width: 1px;
  }
`;
