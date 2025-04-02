import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { reactBreakpoints } from "../styles/breakpoints";
import {
  StyledAddProductContainer,
  StyledAddProductModal,
  StyledDailyCaloriesContainer,
  StyledDailyCaloriesModal,
  StyledNavigationContainer,
  StyledNavigationModal,
  StyledReturnButtonContainer,
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
          <StyledNavigationModal open={open} onClose={onClose}>
            <StyledNavigationContainer>{children}</StyledNavigationContainer>
          </StyledNavigationModal>
        </>
      )}
      {modalType === "daily-calories" && (
        <>
          <StyledDailyCaloriesModal open={open} onClose={onClose}>
            <StyledDailyCaloriesContainer>
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
            </StyledDailyCaloriesContainer>
          </StyledDailyCaloriesModal>
        </>
      )}
      {modalType === "add-product" && (
        <>
          <StyledAddProductModal open={open} onClose={onClose}>
            <StyledAddProductContainer>
              <StyledReturnButtonContainer onClick={onClose}>
                <CustomReturnButton buttonContext="add-product-modal" />
              </StyledReturnButtonContainer>
              {children}
            </StyledAddProductContainer>
          </StyledAddProductModal>
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
