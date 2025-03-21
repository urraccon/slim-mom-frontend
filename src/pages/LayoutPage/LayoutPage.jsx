import { Suspense } from "react";
import { Header } from "./components/Header";
import { Main } from "./LayoutPage.styles";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader";

export const LayoutPage = () => {
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
