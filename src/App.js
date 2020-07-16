import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Forms from "./forms/Forms";
import Profile from "./components/Profile";

const App = () => {
  const isLoggedIn = useSelector((state) => state.loggedIn);

  return (
    <div className="App">
      <h1>Login test</h1>
      {isLoggedIn ? <Profile /> : <Forms />}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        transition={Zoom}
      />
    </div>
  );
};

export default App;
