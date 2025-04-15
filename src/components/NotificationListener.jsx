import { useDispatch, useSelector } from "react-redux";
import {
  clearNotification,
  selectNotification,
} from "../features/notificationSlice";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

const NotificationListener = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const notification = useSelector(selectNotification);

  useEffect(() => {
    if (notification?.message) {
      enqueueSnackbar(notification.message, { variant: notification.type });

      dispatch(clearNotification());
    }
  });

  return null;
};

export default NotificationListener;
