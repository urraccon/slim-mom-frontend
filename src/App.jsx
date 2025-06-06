import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LayoutPage } from "./pages/LayoutPage/LayoutPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { DiaryPage } from "./pages/DiaryPage/DiaryPage";
import { CalculatorPage } from "./pages/CalculatorPage/CalculatorPage";
import LogoutOnPublicRoutes from "./components/LogoutOnPublicRoutes";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router basename="/slimmom/">
      <LogoutOnPublicRoutes />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
