import styled from "styled-components";
import { cssBreakpoints } from "../../../../../styles/breakpoints";

export const Item = styled.li``;

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    align-items: end;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    align-items: center;
  }
`;

export const Name = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  border-bottom: 1px solid #e0e0e0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    width: 45%;
    padding-bottom: 8px;
    margin-right: 7px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    margin-right: 22px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    padding-bottom: 20px;
    width: 39.34%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    margin-right: 48px;
  }
`;

export const Quantity = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    text-align: center;
    width: 16.42%;
    padding-bottom: 8px;
    margin-right: 7px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    margin-right: 46px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    text-align: right;
    padding-bottom: 20px;
    width: 17.37%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    margin-right: 21px;
  }
`;

export const Calories = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    padding-bottom: 8px;
    text-align: center;
    width: 19.64%;
    margin-right: 15px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    padding-bottom: 20px;
    text-align: right;
    margin-right: 32px;
    width: 17.37%;
  }
`;

export const Kcal = styled.span`
  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    font-size: 10px;
    letter-spacing: 0.04em;
  }
`;
