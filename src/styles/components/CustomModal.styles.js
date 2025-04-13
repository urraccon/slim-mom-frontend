import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledModal = styled(Modal).withConfig({
  shouldForwardProp: (prop) => !["modalContext"].includes(prop),
})`
  ${({ modalContext }) => {
    switch (modalContext) {
      case "navigation":
        return `
  &.MuiModal-root {
    height: calc(100% - 80px);
    top: 80px;
  }

  .MuiBackdrop-root {
    height: calc(100% - 80px);
    top: 80px;
  }
    `;

      case "daily-calories":
      case "add-product":
        return `
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

      default:
        return null;
    }
  }}
`;

export const StyledContainer = styled(Box).withConfig({
  shouldForwardProp: (prop) => !["modalContext"].includes(prop),
})`
  width: 100%;
  height: 100%;
  position: absolute;

  ${({ modalContext }) => {
    switch (modalContext) {
      case "navigation":
        return `
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

      case "daily-calories":
        return `
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #254061;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    max-height: 572px;
    max-width: 672px;
  }
        `;

      case "add-product":
        return `
  background-color: transparent;
        `;

      default:
        return null;
    }
  }}
`;

export const ButtonContainer = styled.div`
  height: 40px;
`;
