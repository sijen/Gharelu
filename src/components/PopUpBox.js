import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import LoginContext from "../contextApi/LoginContext";
import ProfileContext from "../contextApi/ProfileContext";
import "./popup.css";
import { useNavigate } from "react-router";

const PopUpBox = ({ display, setDisplay }) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  const { alert, showAlert } = useContext(ProfileContext);
  const navigate = useNavigate();
  const yesPressed = () => {
    setIsLoggedIn(false);
    setDisplay(false);
    navigate("/");
    showAlert("logged out successfull", "danger");
    localStorage.setItem("value", "");
    localStorage.setItem("uid", "");
    document.querySelector("body").style.overflow = "auto";
  };
  const noPressed = () => {
    setDisplay(false);
    document.querySelector("body").style.overflow = "auto";
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
