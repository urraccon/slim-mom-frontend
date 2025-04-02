import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  SvgIcon,
} from "@mui/material";
import styled from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledFormControl = styled(FormControl)`
  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    &.MuiFormControl-root {
      max-width: 85.7%;
    }
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  &.MuiFormLabel-root {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.04em;
    color: #9b9faa;
    line-height: 1.2;
  }

  &.MuiFormLabel-root.Mui-focused {
    color: #9b9faa;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  &.MuiFormGroup-root :last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    &.MuiFormGroup-root {
      margin-top: 8px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    &.MuiFormGroup-root {
      margin-top: 20px;
      border-top: 1px solid #e0e0e0;
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  svg {
    color: #e0e0e0;
  }

  .Mui-checked svg {
    color: #fc842d;
  }

  .Mui-checked + .MuiFormControlLabel-label {
    color: #fc842d;
    font-weight: bold;
  }

  .MuiFormControlLabel-label {
    color: #9b9faa;
    font-size: 14px;
    line-height: 1.15;
    width: 13px;
  }

  .MuiRadio-root {
    padding: 0;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    &.MuiFormControlLabel-root {
      margin: 0 10.05% 0 0;
    }

    .MuiFormControlLabel-label {
      margin-left: 8px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    &.MuiFormControlLabel-root {
      margin: 8px 11.7% 0 0;
    }

    .MuiFormControlLabel-label {
      margin-left: 4px;
    }
  }
`;

export const StyledSvgIcon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    font-size: 20px;
  }
`;
