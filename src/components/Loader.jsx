import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAuthStatus } from "../store/auth/authSelectors";

const backdropStyle = {
  color: "#fff",
  zIndex: (theme) => theme.zIndex.drawer + 1,
};

const loadingStyle = {
  color: "#FC842D",
};

export const Loader = () => {
  const status = useSelector(selectAuthStatus);

  return (
    <>
      {status === "loading" && (
        <Backdrop sx={backdropStyle} open={true}>
          <CircularProgress sx={loadingStyle} />
        </Backdrop>
      )}
    </>
  );
};
