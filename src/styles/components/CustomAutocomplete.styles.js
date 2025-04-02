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

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    .MuiAutocomplete-endAdornment {
      padding-bottom: 20px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    &.MuiAutocomplete-root {
      width: 68.3%;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    &.MuiAutocomplete-root {
      width: 67.64%;
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
