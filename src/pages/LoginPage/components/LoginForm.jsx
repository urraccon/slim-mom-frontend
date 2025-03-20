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
import { useDispatch } from "react-redux";
import { Field } from "../../../components/Field";
import { ButtonComp } from "../../../components/Button";
import { emailValidation, passValidation } from "../../../utils/validator";
import { login } from "../../../redux/auth/authActions";

const registerBtnStyle = {
  backgroundColor: "white",
  border: "2px solid #FC842D",
  color: "#FC842D",
};

const btnStyle = {
  lineHeight: 1.3,
  padding: 0,
  width: 182,
  height: 44,
};

const fieldStyle = {
  width: "100%",
};

const inputStyle = {
  paddingBottom: 20,
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();

    const emailValid = emailValidation(email);
    const passValid = passValidation(pass);

    if (!emailValid) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (!passValid) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }

    if (emailValid && passValid) {
      const userData = {
        email,
        pass,
      };

      dispatch(login(userData));
    }
  }

  return (
    <Container>
      <Content>
        <Title>Log in</Title>
        <Form onSubmit={handleSubmit}>
          <Fields>
            <Field
              error={emailErr}
              id="email"
              type="email"
              label="Email *"
              style={fieldStyle}
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              inputStyle={inputStyle}
            />
            <Field
              error={passErr}
              id="password"
              type="password"
              label="Password *"
              style={fieldStyle}
              value={pass}
              onChange={(evt) => setPass(evt.target.value)}
              inputStyle={inputStyle}
            />
          </Fields>
          <Buttons>
            <ButtonComp type="submit" style={btnStyle}>
              Log in
            </ButtonComp>
            <NavLink to="/register">
              <ButtonComp
                variant="outlined"
                style={{ ...btnStyle, ...registerBtnStyle }}
              >
                Register
              </ButtonComp>
            </NavLink>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};
