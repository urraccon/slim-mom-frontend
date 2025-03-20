import styled from "styled-components";
import { cssBreakpoints } from "../../../styles/breakpoints";

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

  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    font-size: 34px;
  }
`;
