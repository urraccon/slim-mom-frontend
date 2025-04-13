import { StyledCircularProgress } from "../styles/components/Loader.styles";
import { Backdrop } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../features/loader/loaderSlice";

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && (
        <Backdrop open={true}>
          <StyledCircularProgress />
        </Backdrop>
      )}
    </>
  );
};
