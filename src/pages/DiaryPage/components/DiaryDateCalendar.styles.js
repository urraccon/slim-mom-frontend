import styled from "styled-components";
import { cssBreakpoints } from "../../../styles/breakpoints";
import { Paper } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

export const Container = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    align-items: end;
  }
`;

export const Date = styled.h1`
  color: #212121;
  margin: 0;
  line-height: 1.1;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    font-size: 34px;
  }
`;

export const StyledPaper = styled(Paper)`
  overflow: auto;
`;

export const StyledDateCalendar = styled(DateCalendar)`
  & .MuiPickersYear-yearButton {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  && .MuiPickersDay-root.Mui-selected:hover,
  && .MuiPickersYear-yearButton.Mui-selected:hover {
    background-color: #e65a24;
  }

  && .MuiPickersYear-yearButton.Mui-selected,
  && .MuiPickersDay-root.Mui-selected {
    background-color: #fc842d;
  }

  & .MuiPickersYear-yearButton:hover,
  & .MuiPickersDay-root:hover {
    background-color: rgba(252, 132, 45, 0.15);
  }

  & .MuiPickersDay-root:focus, & .MuiPickersYear-yearButton: focus {
    background-color: rgba(252, 132, 45, 0.3);
  }
`;
