import PropTypes from "prop-types";
import {
  StyledCloseIcon,
  StyledControlButton,
  StyledDateRangeIcon,
  StyledMenuIcon,
  StyledMoreVertIcon,
} from "../styles/components/ControlButton.styles";

export const ControlButton = ({
  buttonType,
  onClick,
  iconName,
  iconType,
  id,
}) => {
  let icon;

  switch (iconName) {
    case "close":
      icon = <StyledCloseIcon iconType={iconType} />;
      break;

    case "menu":
      icon = <StyledMenuIcon />;
      break;

    case "calendar":
      icon = <StyledDateRangeIcon />;
      break;

    case "more-vert":
      icon = <StyledMoreVertIcon />;
      break;

    default:
      icon = null;
  }

  return (
    <StyledControlButton
      id={id}
      buttonType={buttonType}
      onClick={onClick}
      disableRipple
    >
      {icon}
    </StyledControlButton>
  );
};

ControlButton.propTypes = {
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  id: PropTypes.string,
};
