import styled from "styled-components";
import { backgrounds } from "../../assets/assets";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  overflow: hidden;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${backgrounds.default.tablet});
  }

  @media screen and (min-width: 768px) {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${backgrounds.default.desktop});
  }
`;
