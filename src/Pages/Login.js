import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaHandPeace } from "react-icons/fa";

const Login = (props) => {
  const navigate = useNavigate();
  const { currentUser, signWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signWithGoogle();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    if(currentUser) {
      navigate("/chat")
    }
  },[currentUser])

  return (
    <div>
      <div className="hero min-h-screen loginPage">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-7xl font-bold">Hello there..<FaHandPeace /></h1>

            <p className="py-6">
              Join the discussion, meet new people, and form connections in one communal space.
            </p>

            <button onClick={handleLogin} className="btn login-btn">
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
