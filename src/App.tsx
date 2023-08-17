import "./App.css";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/">Home</Link>
      <Link to="" reloadDocument={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
