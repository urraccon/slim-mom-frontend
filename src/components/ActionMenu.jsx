import PropTypes from "prop-types";
import { ControlButton } from "./ControlButton";
import { StyledMenu } from "../styles/components/ActionMenu.styles";

const ActionMenu = ({ children, anchorEl, onClick, onClose }) => {
  const open = Boolean(anchorEl);

  return (
    <>
      <ControlButton
        iconName="more-vert"
        onClick={onClick}
        buttonType="action-menu"
        iconType="action-menu"
      />
      <StyledMenu
        id="action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {children}
      </StyledMenu>
    </>
  );
};

ActionMenu.propTypes = {
  anchorEl: PropTypes.object,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default ActionMenu;
