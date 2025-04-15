import {
  StyledBackdrop,
  StyledCircularProgress,
} from "../styles/components/Loader.styles";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../features/loaderSlice";

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && (
        <StyledBackdrop open={true}>
          <StyledCircularProgress />
        </StyledBackdrop>
      )}
    </>
  );
};
