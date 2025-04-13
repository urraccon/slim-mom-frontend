import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLogoutMutation } from "../features/auth/authApi";
import { selectIsAuthenticated } from "../features/auth/authSelectors";

const LogoutOnPublicRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [logout] = useLogoutMutation();

  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    const publicRoutes = ["/login", "/register", "/"];

    const cameFromPrivate = !publicRoutes.includes(prevLocation.current);

    prevLocation.current = location.pathname;

    if (!isAuthenticated) return;

    if (cameFromPrivate && publicRoutes.includes(location.pathname)) {
      logout();
    }
  }, [isAuthenticated, location.pathname, dispatch, logout]);

  return null;
};

export default LogoutOnPublicRoutes;
