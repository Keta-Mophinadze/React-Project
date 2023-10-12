import React from "react";
import { useNavigate } from "react-router-dom";
import Path from "../../Constants/Path";

const Home = () => {
  const navigate = useNavigate();

  const func = () => {
    navigate(Path.Sign_In);
  };
  return (
    <div>
      <button onClick={func}>Sign Up</button>
    </div>
  );
};

export default Home;
