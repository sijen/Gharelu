import React from "react";
import "./home.css";
import MainPageLogin from "./forms/MainPageLogin";
import MainPage from "./MainPage";

function Home() {
  return (
    <section className="main">
      <div class="container-fluid">
        <div class="row lar">
          <div class="col-4 left">
            <MainPageLogin />
          </div>
          <div class="col-8 right">
            <MainPage />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
