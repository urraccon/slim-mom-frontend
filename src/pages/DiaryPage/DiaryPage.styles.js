import styled from "styled-components";
import { backgrounds } from "../../assets/assets";
import { cssBreakpoints } from "../../styles/breakpoints";

export const Section = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: -1;

  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    overflow: hidden;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    overflow: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f0f1f3;
    }

    &::-webkit-scrollbar-thumb {
      background: #264061;
    }
  }
`;

export const Layout = styled.div`
  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    top: 81.6px;
    height: calc(100vh - 81.6px);
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    position: absolute;
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f0f1f3;
    }

    &::-webkit-scrollbar-thumb {
      background: #264061;
    }

    @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
      height: calc(100vh - 121.6px);
      top: 121.6px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    height: inherit;
    overflow: hidden;
    min-height: ${cssBreakpoints.heights.smallHeightMax};
    max-width: 1440px;
    margin: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    gap: 60px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    gap: 55px;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    width: 97.5%;
    margin: auto;
  }
`;

export const Content = styled.section`
  display: flex;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    margin: 40px auto 0;
    width: 87.5%;
    max-width: 450px;
    min-height: 360px;
    height: 35.6vh;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    margin: 100px auto 0;
    width: 91.67%;
    max-width: ${cssBreakpoints.heights.smallHeightMax};
    height: 42.87vh;
    min-height: 439px;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    align-items: center;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    margin: 293px 0 91px;
    width: 59.84%;
    position: relative;
  }
`;

export const Wrapper = styled.div`
  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    width: 100%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    margin: auto;
    width: 95.8%;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    margin-right: 13.35%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    position: relative;
    margin-right: 14.78%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    gap: 32px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 49px;
  }
`;

export const Gradient = styled.div`
  height: 50px;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5) 0%,
    white 42%
  );
  position: absolute;
  bottom: -2.75%;
`;

export const Leaf = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: -2;
  background-image: url(${backgrounds.diary.desktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`;

export const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -3;
  background: linear-gradient(to right, white 59.6%, #f0f1f3 40.4%);
  max-width: 1477px;

  @media screen and (min-width: ${cssBreakpoints.lengths
      .desktopMin}) and (max-height: ${cssBreakpoints.heights.smallHeightMax}) {
    transform: translateX(-50.25%);
  }
`;

export const OuterBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -4;
  background: linear-gradient(to right, white 59.6%, #f0f1f3 40.4%);
`;
