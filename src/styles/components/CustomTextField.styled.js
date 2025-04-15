import { TextField } from "@mui/material";
import styled, { css } from "styled-components";
import { cssBreakpoints } from "../breakpoints";

export const StyledTextField = styled(TextField).withConfig({
  shouldForwardProp: (prop) =>
    !["hasValue", "isFocused", "textFieldType"].includes(prop),
})`
  .MuiInputLabel-root {
    font-size: 14px;
    letter-spacing: 0.04em;
    line-height: 1.2;
    color: #9b9faa;
    font-weight: bold;
    transform: none;
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ hasValue, isFocused }) => (hasValue || isFocused ? 0 : 1)};
  }

  .MuiInputLabel-root.Mui-focused {
    transform: none;
    color: #9b9faa;
  }

  .MuiInputBase-root {
    font-size: 14px;
    color: #212121;
    line-height: 1.2;
    letter-spacing: 0.04em;
    margin: 0;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    && .MuiInput-root {
      padding-bottom: 8px;
    }
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    && .MuiInput-root {
      padding-bottom: 20px;
    }
  }

  &&& .MuiInput-input {
    padding: 0;
    height: auto;
  }

  .MuiInput-underline:after,
  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #212121;
  }

  .MuiFormLabel-root.Mui-error {
    color: #d32f2f;
  }

  .MuiInput-underline.Mui-error:hover:before {
    border-bottom: 2px solid #d32f2f;
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid #e0e0e0;
  }

  ${({ textFieldType }) => {
    switch (textFieldType) {
      case "calories-form":
        return css`
          @media screen and (max-width: ${cssBreakpoints.lengths
              .largeMobileMax}) {
            width: 85.7%;
          }
        `;

      case "add-product-form-quantity-field":
        return css`
          @media screen and (min-width: ${cssBreakpoints.lengths
              .tabletMin}) and (max-width: ${cssBreakpoints.lengths
              .tabletMax}) {
            &.MuiTextField-root {
              margin-right: 87px;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
            &.MuiTextField-root {
              width: 17.37%;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
            &.MuiTextField-root {
              margin-right: 60px;
            }
          }

          @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
            .MuiInputBase-input {
              text-align: right;
            }

            .MuiInputLabel-root {
              right: 0;
              left: auto;
            }
          }
        `;

      case "add-product-form-product-field":
        return css`
          @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
            .MuiInputBase-input {
              text-align: right;
            }

            .MuiInputLabel-root {
              right: 30px;
              left: auto;
            }
          }
        `;

      default:
        return null;
    }
  }}
`;
