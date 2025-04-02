import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLogoutMutation } from "../features/auth/authApi";
import { clearUser } from "../features/auth/authSlice";
import { setNotification } from "../features/notifications/notificationSlice";

async function handleLogout(dispatch, logout) {
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

const LogoutOnPublicRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [logout] = useLogoutMutation();

  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    const publicRoutes = ["/login", "/register", "/"];

    const cameFromPrivate = !publicRoutes.includes(prevLocation.current);

    prevLocation.current = location.pathname;

    if (!isAuthenticated) return;

    if (cameFromPrivate && publicRoutes.includes(location.pathname)) {
      handleLogout(dispatch, logout);
    }
  }, [isAuthenticated, location.pathname, dispatch, logout]);

  return null;
};

export default LogoutOnPublicRoutes;
