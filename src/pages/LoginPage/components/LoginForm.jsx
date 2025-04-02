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
import { setUser } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { setNotification } from "../../../features/notifications/notificationSlice";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  async function handleSubmit(evt) {
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
      try {
        const { user, message } = await login({ email, password }).unwrap();

        if (user) {
          dispatch(setUser(user));
        }

        dispatch(setNotification({ message, type: "success" }));
      } catch (error) {
        const errorMessage = error?.data?.message || "Something went wrong";
        dispatch(setNotification({ message: errorMessage, type: "error" }));
        console.error("Login error:", errorMessage);
      }
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
            <ActionButton buttonContext="authentication-form-contained-button">
              Log in
            </ActionButton>
            <NavLink to="/registration">
              <ActionButton
                variant="outlined"
                buttonContext="authentication-form-outlined-button"
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
