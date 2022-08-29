import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import LoginContext from "../contextApi/LoginContext";
import "./popup.css";
import { useNavigate } from "react-router";

const PopUpBox = ({ display, setDisplay }) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const yesPressed = () => {
    setIsLoggedIn(false);
    setDisplay(false);
    navigate("/");
  };
  const noPressed = () => {
    setDisplay(false);
  };
  const cancelPressed = () => {
    setDisplay(false);
  };
  return (
    display && (
      <div className="model">
        <div className="popupbox">
          <div className="title">do you want to log out?</div>
          <span>
            <button className=" btn btn-primary me-2" onClick={yesPressed}>
              yes
            </button>
            <button className=" btn btn-secondary" onClick={noPressed}>
              no
            </button>
          </span>
        </div>
      </div>
    )
  );
};

export default PopUpBox;
