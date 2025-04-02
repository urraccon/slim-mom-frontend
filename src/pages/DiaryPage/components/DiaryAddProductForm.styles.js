import styled from "styled-components";
import { cssBreakpoints } from "../../../styles/breakpoints";
import AddIcon from "@mui/icons-material/Add";

export const Container = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: calc(100% - 40px);
  overflow: auto;
  background-color: white;

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
    display: flex;
  }
`;

export const Box = styled.div`
  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    min-height: 446.4px;
    height: fit-content;
    margin: auto;
    width: 87.28%;
  }
`;

export const Form = styled.form`
  display: flex;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    flex-direction: column;
    gap: 60px;
    align-items: center;

    margin: 80px auto 0;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    gap: 87px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    align-items: end;
    margin-right: 88px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    gap: 60px;
  }
`;

export const Fields = styled.div`
  display: flex;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 450px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    gap: 22px;
    width: 70.5%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    gap: 48px;
    width: 73.85%;
  }
`;
