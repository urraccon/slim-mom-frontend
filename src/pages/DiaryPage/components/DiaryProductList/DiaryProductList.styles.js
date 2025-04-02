import styled from "styled-components";
import { cssBreakpoints } from "../../../../styles/breakpoints";

export const Container = styled.div`
  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    height: 204.5px;
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    gap: 20px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    height: 244px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 16px;
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

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    height: 271px;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  text-align: center;
`;
