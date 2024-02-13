import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dasboard";

function MainBody() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default MainBody;
