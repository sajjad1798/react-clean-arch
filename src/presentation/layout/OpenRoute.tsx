import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/presentation/pages/auth/Login";
import { SignupPage } from "@/presentation/pages/auth/Signup";

function OpenRoute() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default OpenRoute;
