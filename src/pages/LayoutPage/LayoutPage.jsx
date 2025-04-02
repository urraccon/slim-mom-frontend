import { Suspense } from "react";
import { Header } from "./components/Header";
import { Main } from "./LayoutPage.styles";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { Notification } from "../../components/Notification";

export const LayoutPage = () => {
  return (
    <>
      <Notification />
      <Main>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Loader />
      </Main>
    </>
  );
};
