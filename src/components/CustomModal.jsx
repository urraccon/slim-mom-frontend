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

export const CustomModal = ({ children, modalType, open, onClose }) => {
  const largeMobileMax = useMediaQuery({
    maxWidth: reactBreakpoints.largeMobileMax,
  });

  return (
    <>
      {modalType === "navigation" && (
        <>
          <StyledModal open={open} onClose={onClose} modalType={modalType}>
            <StyledContainer containerType={modalType}>
              {children}
            </StyledContainer>
          </StyledModal>
        </>
      )}
      {modalType === "daily-calories" && (
        <>
          <StyledModal open={open} onClose={onClose} modalType={modalType}>
            <StyledContainer containerType={modalType}>
              {largeMobileMax ? (
                <>
                  <CustomReturnButton
                    onClick={onClose}
                    buttonType="daily-calories-modal"
                  />
                </>
              ) : (
                <>
                  <ControlButton
                    onClick={onClose}
                    buttonType="modal"
                    iconName="close"
                    iconType="modal"
                  />
                </>
              )}
              {children}
            </StyledContainer>
          </StyledModal>
        </>
      )}
      {modalType === "add-product-form" && (
        <>
          <StyledModal open={open} onClose={onClose} modalType={modalType}>
            <StyledContainer containerType={modalType}>
              <ButtonContainer onClick={onClose}>
                <CustomReturnButton buttonType={modalType} />
              </ButtonContainer>
              {children}
            </StyledContainer>
          </StyledModal>
        </>
      )}
      {modalType === "edit-product-form" && (
        <>
          <StyledModal open={open} onClose={onClose} modalType={modalType}>
            <StyledContainer containerType={modalType}>
              {largeMobileMax ? (
                <>
                  <ButtonContainer onClick={onClose}>
                    <CustomReturnButton buttonType={modalType} />
                  </ButtonContainer>
                </>
              ) : (
                <>
                  <ControlButton
                    onClick={onClose}
                    buttonType="modal"
                    iconName="close"
                    iconType="modal"
                  />
                </>
              )}
              {children}
            </StyledContainer>
          </StyledModal>
        </>
      )}
    </>
  );
};

CustomModal.propTypes = {
  modalType: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
