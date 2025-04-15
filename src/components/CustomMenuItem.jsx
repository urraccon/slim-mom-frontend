import PropTypes from "prop-types";
import {
  IconContainer,
  Label,
  MenuItemContent,
  StyledDeleteIcon,
  StyledEditIcon,
  StyledMenuItem,
} from "../styles/components/CustomMenuItem";

const CustomMenuItem = ({ iconName, label, onClick, id }) => {
  let icon;

  switch (iconName) {
    case "delete":
      icon = <StyledDeleteIcon />;
      break;

    case "edit":
      icon = <StyledEditIcon />;
      break;

    default:
      return null;
  }

  return (
    <StyledMenuItem onClick={onClick} id={id} disableRipple>
      <MenuItemContent>
        <IconContainer>{icon}</IconContainer>
        <Label>{label}</Label>
      </MenuItemContent>
    </StyledMenuItem>
  );
};

CustomMenuItem.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default CustomMenuItem;
