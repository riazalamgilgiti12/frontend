import React from "react";
import '../App.css'
import LoginForm from "../components/Loginform";
import sparko from '../assets/sparko.png'
const LoginPage = () => {
  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <LoginForm />
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="heading" > <img
          src={sparko}
          alt="Spark Logo"
          style={{ width: "100px", marginBottom: "20px" }}
        />
        <h1>Spark</h1></div>
       
        <p> <span className="p-right">Learn more about Air Drive on</span> <br /> <a href="#">Spark.pl</a></p>


        
      </div>

      
    </div>
  );
};

export default LoginPage;
