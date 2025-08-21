import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();


  const goToNextPage = () => {
    navigate("/contact");
  };
  
  return (
  <div>
    <h2>About Us</h2>;
    <button onClick={goToNextPage}>Go to Contact Page</button>
  </div>
)};

export default About;
