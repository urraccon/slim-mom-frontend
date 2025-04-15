import { Container, LogoutBtn, Username, Wrapper } from "./UserInfo.styles";
import PropTypes from "prop-types";
import { StyledDivider } from "../../../../styles/components/CustomDivider.styles";
import { useLogoutMutation } from "../../../../features/auth/authApi";

export const UserInfo = ({ username }) => {
  const [logout] = useLogoutMutation();

  return (
    <Wrapper>
      <Container>
        <Username>{username}</Username>
        <StyledDivider orientation="vertical" dividerType="user-info" />
        <LogoutBtn onClick={() => logout()}>Exit</LogoutBtn>
      </Container>
    </Wrapper>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string,
};
