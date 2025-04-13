import { Autocomplete } from "@mui/material";
import styled from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledCustomAutocomplete = styled(Autocomplete)`
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

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    &.MuiAutocomplete-root {
      margin-right: 22px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    .MuiAutocomplete-endAdornment {
      padding-bottom: 20px;
    }

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

export const StyledOption = styled.li`
  &&&.MuiAutocomplete-option {
    ${({ selected }) =>
      selected === true &&
      `background-color: rgba(252, 132, 45, 0.15) !important;

  &.Mui-focused {
    background-color: rgba(252, 132, 45, 0.3) !important;
  }`}
  }
`;
