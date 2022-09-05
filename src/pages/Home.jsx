import React from "react";
import "./home.css";
import MainPageLogin from "./forms/MainPageLogin";
import MainPage from "./MainPage";

function Home() {
  return (
    <section className="main">
      <div className="container-fluid">
        <div className="row lar">
          <div className="col-4 left">
            <MainPageLogin />
          </div>
          <div className="col-8 right">
            <MainPage />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
