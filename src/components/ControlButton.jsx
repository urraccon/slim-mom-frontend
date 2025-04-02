import PropTypes from "prop-types";
import {
  StyledCloseIcon,
  StyledControlButton,
  StyledDateRangeIcon,
  StyledMenuIcon,
} from "../styles/components/ControlButton.styles";

export const ControlButton = ({
  buttonContext,
  onClick,
  iconName,
  iconContext,
}) => {
  let icon;

  switch (iconName) {
    case "close":
      icon = <StyledCloseIcon iconContext={iconContext} />;
      break;

    case "menu":
      icon = <StyledMenuIcon />;
      break;

    case "calendar":
      icon = <StyledDateRangeIcon />;
      break;

    default:
      icon = null;
  }

  return (
    <StyledControlButton
      buttonContext={buttonContext}
      onClick={onClick}
      disableRipple
    >
      {icon}
    </StyledControlButton>
  );
};

ControlButton.propTypes = {
  buttonContext: PropTypes.string,
  onClick: PropTypes.func,
  iconName: PropTypes.string,
  iconContext: PropTypes.string,
};
