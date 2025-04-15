import { Backdrop, CircularProgress } from "@mui/material";
import styled from "styled-components";

export const StyledBackdrop = styled(Backdrop)`
  &.MuiBackdrop-root {
    z-index: 1301;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    color: #fc842d;
  }
`;
