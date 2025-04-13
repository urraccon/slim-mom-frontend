import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import {
  clearNotification,
  selectNotification,
} from "../features/notification/notificationSlice";
import { useEffect, useState } from "react";

export const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(selectNotification);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  function handleClose(_, reason) {
    if (reason === "clickaway") return;
    dispatch(clearNotification());
  }

  useEffect(() => {
    if (notification) {
      setMessage(notification.message);
      setType(notification.type);
    } else {
      setMessage(null);
    }
  }, [notification]);

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
