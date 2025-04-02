import styled from "styled-components";
import { backgrounds } from "../../assets/assets";
import { cssBreakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    min-height: 433px;
    height: 42.82vh;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    background-image: url(${backgrounds.diary.tablet});
    background-position: bottom;
    height: 31.83vh;
    min-height: 326px;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    align-items: center;
    background-color: #f0f1f3;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    width: 40.14%;
  }
`;

export const Content = styled.div`
  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    margin: 40px auto 52px;
    width: 87.28%;
    max-width: 450px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    margin: 80px auto;
    width: 91.67%;
    max-width: ${cssBreakpoints.heights.smallHeightMax};
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    margin: 293px auto 166px;
    width: 59%;
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    gap: 40px;
    flex-direction: column;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    margin-right: 6.82%;
    gap: 80px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    flex-direction: column;
    gap: 60px;
    width: 100%;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    width: 100%;
    gap: 34px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  line-height: 1.4;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.li``;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const TextWrapper = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  line-height: 1.25;
`;

export const Message = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  line-height: 1.25;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    margin-bottom: 94px;
  }
`;
