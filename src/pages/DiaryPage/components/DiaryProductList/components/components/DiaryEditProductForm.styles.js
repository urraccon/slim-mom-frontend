import styled from "styled-components";
import { cssBreakpoints } from "../../../../../../styles/breakpoints";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    top: 40px;
    height: calc(100% - 40px);
    overflow: auto;
    background-color: white;
    margin: auto;

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

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    height: 100%;
    min-height: 572px;
    z-index: -1;
  }
`;

export const Box = styled.div`
  margin: auto;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    min-height: 446.4px;
    height: fit-content;
    width: 87.28%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 60px;
    display: flex;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    margin-top: 80px;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    max-width: 450px;
    width: 100%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    width: 330px;
  }
`;

export const Title = styled.h4`
  margin: 0;
  color: #212121;
  text-align: center;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    font-size: 18px;
    line-height: 1.4em;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    font-size: 26px;
    line-height: 1.35em;
  }
`;
