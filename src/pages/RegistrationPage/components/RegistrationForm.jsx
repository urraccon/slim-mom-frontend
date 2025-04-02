import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Buttons,
  Fields,
  Form,
  Container,
  Title,
  Content,
} from "./RegistrationForm.styles";
import {
  emailValidation,
  nameValidation,
  registrationPasswordValidation,
} from "../../../utils/validator";
import { CustomTextField } from "../../../components/CustomTextField";
import { ActionButton } from "../../../components/ActionButton";
import { useRegisterMutation } from "../../../features/auth/authApi";
import { setUser } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { setNotification } from "../../../features/notifications/notificationSlice";

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();

  async function handleSubmit(evt) {
    evt.preventDefault();

    const nameValid = nameValidation(name);
    const emailValid = emailValidation(email);
    const passwordValid = registrationPasswordValidation(password);

    if (!nameValid) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }

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

    if (nameValid && emailValid && passwordValid) {
      try {
        const { user, message } = await register({
          name,
          email,
          password,
        }).unwrap();

        if (user) {
          dispatch(setUser(user));
        }

        dispatch(setNotification({ message, type: "success" }));
      } catch (error) {
        const errorMessage = error?.data?.message || "Something went wrong";
        dispatch(setNotification({ message: errorMessage, type: "error" }));
        console.error("Registration error:", errorMessage);
      }
    }
  }

  return (
    <Container>
      <Content>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Fields>
            <CustomTextField
              error={nameErr}
              id="name"
              type="text"
              label="Name *"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
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
              Register
            </ActionButton>
            <NavLink to="/login">
              <ActionButton
                variant="outlined"
                buttonContext="authentication-form-outlined-button"
              >
                Log in
              </ActionButton>
            </NavLink>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};
