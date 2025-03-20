import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/loading/loadingSelectors";

const backdropStyle = {
  color: "#fff",
  zIndex: (theme) => theme.zIndex.drawer + 1,
};

const loadingStyle = {
  color: "#FC842D",
};

export const Loader = () => {
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && (
        <Backdrop sx={backdropStyle} open={true}>
          <CircularProgress sx={loadingStyle} />
        </Backdrop>
      )}
    </>
  );
};
