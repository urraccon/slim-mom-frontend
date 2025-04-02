import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../features/notifications/notificationSlice";
import { Alert, Snackbar } from "@mui/material";

export const Notification = () => {
  const { message, type } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(clearNotification());
  }

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={type} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};
