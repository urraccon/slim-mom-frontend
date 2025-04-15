import PropTypes from "prop-types";
import {
  StyledCustomReturnButton,
  StyledReturnIcon,
} from "../styles/components/CustomReturnButton.styles";

export const CustomReturnButton = ({ buttonType, onClick }) => (
  <StyledCustomReturnButton
    buttonType={buttonType}
    onClick={onClick}
    disableRipple
  >
    <StyledReturnIcon />
  </StyledCustomReturnButton>
);

CustomReturnButton.propTypes = {
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
};
