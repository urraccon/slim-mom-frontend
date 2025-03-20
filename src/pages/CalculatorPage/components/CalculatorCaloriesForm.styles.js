import styled from "styled-components";
import { cssBreakpoints } from "../../../styles/breakpoints";

export const Wrapper = styled.div`
  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    height: 45.33vh;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    height: 54.56vh;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    display: flex;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    width: 59.86%;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    margin: auto;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    width: 87.5%;
    max-width: 450px;
    margin: 32px auto 0;
    gap: 56px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    width: 91.66%;
    max-width: ${cssBreakpoints.heights.smallHeightMax};
    margin: 100px auto 0;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 68px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    margin: 293px 18.61% 111px 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #212121;

  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    font-size: 18px;
    line-height: 1.4em;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    font-size: 34px;
    line-height: 1.25em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    gap: 40px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 60px;
  }
`;

export const Fields = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    flex-direction: row;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    gap: 32px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    width: 34.1%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 40px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    width: 39.5%;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${cssBreakpoints.lengths.mobileMax}) {
    gap: 32px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    width: 34.1%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 40px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    width: 39.5%;
  }
`;
