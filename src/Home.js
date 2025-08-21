import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
      navigate("/about"); 
  };

  return (
      <div>
          <h1>Home Page</h1>
          <button onClick={goToNextPage}>Go to About Page</button>
      </div>
)};

export default Home;
