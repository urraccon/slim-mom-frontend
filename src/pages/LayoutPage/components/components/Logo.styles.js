import styled from "styled-components";
import { cssBreakpoints } from "../../../../styles/breakpoints";

export const Image = styled.img`
  width: auto;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    height: 44px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    margin-bottom: 7px;
    height: 66px;
  }
`;
