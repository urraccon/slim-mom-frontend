import { Divider } from "@mui/material";
import { cssBreakpoints } from "../breakpoints";
import styled, { css } from "styled-components";

export const StyledDivider = styled(Divider).withConfig({
  shouldForwardProp: (prop) => !["dividerType"].includes(prop),
})`
  ${({ dividerType }) => {
    switch (dividerType) {
      case "header":
      case "user-info":
        return css`
          &.MuiDivider-root {
            height: 32px;
            border: 0;
            border-left: 2px solid #e0e0e0;
          }
        `;

      case "daily-calories-modal":
        return css`
          &.MuiDivider-root {
            border-bottom: 1px solid #e0e0e0;
          }

          @media screen and (max-width: ${cssBreakpoints.lengths
              .largeMobileMax}) {
            &.MuiDivider-root {
              margin: 32px 0 20px;
              width: 100%;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
            &.MuiDivider-root {
              margin: 32px 0 12px;
              width: 330px;
            }
          }
        `;

      default:
        return null;
    }
  }}
`;
