import {
  Buttons,
  Container,
  Content,
  Fields,
  Form,
  Title,
} from "./LoginForm.styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { emailValidation, passwordValidation } from "../../../utils/validator";
import { CustomTextField } from "../../../components/CustomTextField";
import { ActionButton } from "../../../components/ActionButton";
import { useLoginMutation } from "../../../features/auth/authApi";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [login] = useLoginMutation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const emailValid = emailValidation(email);
    const passwordValid = passwordValidation(password);

    if (!emailValid) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (!passwordValid) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }

    if (emailValid && passwordValid) {
      login({ email, password });
    }
  }

  return (
    <Container>
      <Content>
        <Title>Log in</Title>
        <Form onSubmit={handleSubmit}>
          <Fields>
            <CustomTextField
              error={emailErr}
              id="email"
              type="email"
              label="Email *"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <CustomTextField
              error={passwordErr}
              id="password"
              type="password"
              label="Password *"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </Fields>
          <Buttons>
            <ActionButton buttonType="authentication-form-contained-button">
              Log in
            </ActionButton>
            <NavLink to="/registration">
              <ActionButton
                variant="outlined"
                buttonType="authentication-form-outlined-button"
              >
                Register
              </ActionButton>
            </NavLink>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};
