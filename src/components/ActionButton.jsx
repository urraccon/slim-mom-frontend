import PropTypes from "prop-types";
import {
  StyledAddIcon,
  StyledCustomButton,
} from "../styles/components/ActionButton.styles";

export const ActionButton = ({
  children,
  type = "submit",
  variant = "contained",
  onClick,
  buttonContext,
  iconName,
}) => {
  return (
    <StyledCustomButton
      disableRipple
      onClick={onClick}
      type={type}
      variant={variant}
      buttonContext={buttonContext}
      iconName={iconName}
    >
      {iconName === "add-icon" ? <StyledAddIcon /> : children}
    </StyledCustomButton>
  );
};

ActionButton.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  buttonContext: PropTypes.string,
  iconName: PropTypes.string,
};
