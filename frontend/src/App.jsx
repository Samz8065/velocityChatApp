import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex">
        {/* <Login/> */}
        {/* <SignUp/> */}
        <Home />
      </div>
    </>
  );
}

export default App;
