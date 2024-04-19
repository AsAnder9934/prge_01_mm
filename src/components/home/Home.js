import React from "react";
import "./Home.css";
import plan_wat from "./Przechwytywanie.PNG";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <div className="home_top_about">O projekcies</div>
      </div>
      <div className="home_botton">
        <div className="home_left">
          <img className="plan" src={plan_wat} alt="logo" />
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>

          <div className="home_right_subtitle">
            Strona internetowa z interaktywną mapą
          </div>

          <button className="home_right_button">START</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
