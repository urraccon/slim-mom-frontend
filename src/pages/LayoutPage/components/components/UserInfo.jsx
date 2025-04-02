import { Container, LogoutBtn, Username, Wrapper } from "./UserInfo.styles";
import PropTypes from "prop-types";
import { StyledDivider } from "../../../../styles/components/CustomDivider.styles";
import { useLogoutMutation } from "../../../../features/auth/authApi";
import { clearUser } from "../../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { setNotification } from "../../../../features/notifications/notificationSlice";

export const UserInfo = ({ username }) => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      const { message } = await logout().unwrap();
      dispatch(clearUser());
      dispatch(setNotification({ message, type: "success" }));
    } catch (error) {
      const errorMessage = error?.data?.message || "Something went wrong";
      dispatch(setNotification({ message: errorMessage, type: "error" }));
      console.error("Logout error:", errorMessage);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Username>{username}</Username>
        <StyledDivider orientation="vertical" dividerContext="user-info" />
        <LogoutBtn onClick={handleLogout}>Exit</LogoutBtn>
      </Container>
    </Wrapper>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string,
};
