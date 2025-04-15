import { Autocomplete } from "@mui/material";
import styled, { css } from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledCustomAutocomplete = styled(Autocomplete).withConfig({
  shouldForwardProp: (prop) => !["autocompleteType"].includes(prop),
})`
  .MuiAutocomplete-popupIndicator {
    padding: 0;
  }

  .MuiAutocomplete-clearIndicator {
    padding: 2px;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    .MuiAutocomplete-endAdornment {
      padding-bottom: 8px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    .MuiAutocomplete-endAdornment {
      padding-bottom: 20px;
    }
  }

  ${({ autocompleteType }) => {
    switch (autocompleteType) {
      case "add-product-form":
        return css`
          @media screen and (min-width: ${cssBreakpoints.lengths
              .tabletMin}) and (max-width: ${cssBreakpoints.lengths
              .tabletMax}) {
            &.MuiAutocomplete-root {
              margin-right: 22px;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
            &.MuiAutocomplete-root {
              width: 39.34%;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
            &.MuiAutocomplete-root {
              margin-right: 48px;
            }
          }
        `;

      default:
        return null;
    }
  }}
`;

export const StyledOption = styled.li`
  ${({ selected }) =>
    selected === true &&
    css`
      &&&.MuiAutocomplete-option {
        background-color: rgba(252, 132, 45, 0.15) !important;

        &.Mui-focused {
          background-color: rgba(252, 132, 45, 0.3) !important;
        }
      }
    `}

  &.MuiAutocomplete-option {
    font-size: 14px;
    color: #212121;
    letter-spacing: 0.04em;
  }
`;
