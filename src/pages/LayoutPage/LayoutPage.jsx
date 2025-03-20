import {
  Suspense,
  // useEffect,
  //  useState
} from "react";
import { Header } from "./components/Header";
import { Main } from "./LayoutPage.styles";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader";
// import { useDispatch, useSelector } from 'react-redux';
// import { startLoading, stopLoading } from 'components/redux/loading/actions';
// import {
//   selectAuthStatus,
//   selectLoggedIn,
//   selectUserName,
// } from 'components/redux/auth/selectors';

export const LayoutPage = () => {
  // const status = useSelector(selectAuthStatus);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     if (status === 'loading') {
  //       dispatch(startLoading());
  //     }

  //     if (status !== 'loading') {
  //       dispatch(stopLoading());
  //     }
  //   }, [status, dispatch]);

  return (
    <Main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Loader />
    </Main>
  );
};
