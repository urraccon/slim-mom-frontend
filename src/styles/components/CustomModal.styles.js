import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledNavigationModal = styled(Modal)`
  &.MuiModal-root {
    height: calc(100% - 80px);
    top: 80px;
  }

  .MuiBackdrop-root {
    height: calc(100% - 80px);
    top: 80px;
  }
`;

export const StyledNavigationContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #264061;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d6db;
  }
`;

export const StyledDailyCaloriesModal = styled(Modal)`
  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    &.MuiModal-root {
      top: 81.6px;
    }

    .MuiBackdrop-root {
      background-color: transparent;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    .MuiBackdrop-root {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const StyledDailyCaloriesContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  dispaly: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #254061;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    overflow: hidden;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    max-height: 572px;
    max-width: 672px;
    overflow: auto;
  }
`;

export const StyledAddProductModal = styled(Modal)`
  &.MuiModal-root {
    height: calc(100vh - 81.6px);
    top: 81.6px;
  }

  .MuiBackdrop-root {
    background-color: transparent;
  }
`;

export const StyledAddProductContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;

export const StyledReturnButtonContainer = styled(Box)`
  height: 40px;
`;
