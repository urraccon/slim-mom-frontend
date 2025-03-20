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
import { useDispatch } from "react-redux";
import { Field } from "../../../components/Field";
import { ButtonComp } from "../../../components/Button";
import {
  emailValidation,
  nameValidation,
  registrationPassValidation,
} from "../../../utils/validator";
import { register } from "../../../redux/auth/authActions";

const loginBtnStyle = {
  backgroundColor: "white",
  border: "2px solid #FC842D",
  color: "#FC842D",
};

const btnStyle = {
  padding: 0,
  width: 182,
  height: 44,
  lineHeight: 1.3,
};

const fieldStyle = {
  width: "100%",
};

const inputStyle = {
  paddingBottom: 20,
};

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();

    const nameValid = nameValidation(name);
    const emailValid = emailValidation(email);
    const passValid = registrationPassValidation(pass);

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

    if (!passValid) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }

    if (nameValid && emailValid && passValid) {
      const userData = {
        name,
        email,
        pass,
      };

      dispatch(register(userData));
    }
  }

  return (
    <Container>
      <Content>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Fields>
            <Field
              error={nameErr}
              id="name"
              type="text"
              label="Name *"
              style={fieldStyle}
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              inputStyle={inputStyle}
            />
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
              Register
            </ButtonComp>
            <NavLink to="/login">
              <ButtonComp
                variant="outlined"
                style={{ ...btnStyle, ...loginBtnStyle }}
              >
                Log in
              </ButtonComp>
            </NavLink>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};
