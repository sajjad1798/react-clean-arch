import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/presentation/pages/auth/Login";

function OpenRoute() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
}

export default OpenRoute;
