import styled from "styled-components";
import { backgrounds } from "../../assets/assets";
import { cssBreakpoints } from "../../styles/breakpoints";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  overflow: hidden;

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    background-image: url(${backgrounds.default.tablet});
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    background-image: url(${backgrounds.default.desktop});
  }
`;
