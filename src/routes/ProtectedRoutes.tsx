import { Route, Navigate, Routes } from "react-router-dom";
import Home from "../pages/Home";

function ProtectedRoutes(): JSX.Element {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />;
      </Routes>
    );
  } else return <Navigate to="/signup" />;
}

export default ProtectedRoutes;
