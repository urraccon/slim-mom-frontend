import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { selectIsAuthenticated } from "../features/auth/authSelectors";

const AuthRedirect = ({ setPrivacy }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const prevAuthState = useRef(isAuthenticated);

  useEffect(() => {
    if (prevAuthState.current === isAuthenticated) return;

    if (isAuthenticated) {
      setPrivacy("private");
      navigate("/calculator");
    } else {
      setPrivacy("public");
      navigate("/");
    }

    prevAuthState.current = isAuthenticated;
  }, [isAuthenticated, navigate, setPrivacy]);

  return null;
};

export default AuthRedirect;

AuthRedirect.propTypes = {
  setPrivacy: PropTypes.func,
};
