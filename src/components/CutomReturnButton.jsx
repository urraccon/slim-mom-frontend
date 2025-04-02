import PropTypes from "prop-types";
import {
  StyledCustomReturnButton,
  StyledReturnIcon,
} from "../styles/components/CustomReturnButton.styles";

export const CustomReturnButton = ({ buttonContext, onClick }) => (
  <StyledCustomReturnButton
    buttonContext={buttonContext}
    onClick={onClick}
    disableRipple
  >
    <StyledReturnIcon />
  </StyledCustomReturnButton>
);

CustomReturnButton.propTypes = {
  buttonContext: PropTypes.string,
  onClick: PropTypes.func,
};
