import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { reactBreakpoints } from "../styles/breakpoints";
import {
  ButtonContainer,
  StyledContainer,
  StyledModal,
} from "../styles/components/CustomModal.styles";
import { CustomReturnButton } from "./CutomReturnButton";
import { ControlButton } from "./ControlButton";

export const CustomModal = ({ children, modalContext, open, onClose }) => {
  const largeMobileMax = useMediaQuery({
    maxWidth: reactBreakpoints.largeMobileMax,
  });

  return (
    <>
      {modalContext === "navigation" && (
        <>
          <StyledModal
            open={open}
            onClose={onClose}
            modalContext={modalContext}
          >
            <StyledContainer modalContext={modalContext}>
              {children}
            </StyledContainer>
          </StyledModal>
        </>
      )}
      {modalContext === "daily-calories" && (
        <>
          <StyledModal
            open={open}
            onClose={onClose}
            modalContext={modalContext}
          >
            <StyledContainer modalContext={modalContext}>
              {largeMobileMax ? (
                <>
                  <CustomReturnButton
                    onClick={onClose}
                    buttonContext="daily-calories-modal"
                  />
                </>
              ) : (
                <>
                  <ControlButton
                    onClick={onClose}
                    buttonContext="modal"
                    iconName="close"
                    iconContext="modal"
                  />
                </>
              )}
              {children}
            </StyledContainer>
          </StyledModal>
        </>
      )}
      {modalContext === "add-product" && (
        <>
          <StyledModal
            open={open}
            onClose={onClose}
            modalContext={modalContext}
          >
            <StyledContainer modalContext={modalContext}>
              <ButtonContainer onClick={onClose}>
                <CustomReturnButton buttonContext="add-product-modal" />
              </ButtonContainer>

              {children}
            </StyledContainer>
          </StyledModal>
        </>
      )}
    </>
  );
};

CustomModal.propTypes = {
  modalContext: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
