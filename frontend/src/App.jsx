import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="w-full min-h-screen flex">
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <SignUp />}
          ></Route>
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          ></Route>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
