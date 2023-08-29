import "./App.css";
import {
  Routes,
  BrowserRouter,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./routes/ProtectedRoutes";

import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<ProtectedRoutes />} />
      </Route>
    )
  );
  return (
    // return createBrowserRouter([]);
    <RouterProvider router={router} />
  );
}

export default App;
