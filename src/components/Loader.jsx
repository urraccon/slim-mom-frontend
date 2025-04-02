import { StyledCircularProgress } from "../styles/components/Loader.styles";
import { Backdrop } from "@mui/material";
import { useGetProductsQuery } from "../features/diary/productsApi";
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from "../features/auth/authApi";

export const Loader = () => {
  const { isLoading: isLoadingLogin } = useLogoutMutation();
  const { isLoading: isLoadingLogout } = useLoginMutation();
  const { isLoading: isLoadingRegister } = useRegisterMutation();
  const { isLoading: isLoadingProducts } = useGetProductsQuery();

  const isLoading =
    isLoadingLogin || isLoadingLogout || isLoadingRegister || isLoadingProducts;

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
