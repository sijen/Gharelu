import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LoginContext from "../contextApi/LoginContext";
import ProfileContext from "../contextApi/ProfileContext";
import PopUpBox from "./PopUpBox";
// import Logout from "./googleButtons/Logout";
import Logo from "../logo.png";
import { Button } from "@material-ui/core";
import Login from "../pages/Login";
import { BiUserCircle } from "react-icons/bi";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const { firstname, lastname } = useContext(ProfileContext);
  const [displayLogin, setDisplayLogin] = useState(false);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const logoutHandled = () => {
    setDisplay(true);
  };

  const handleLogin = () => {
    setDisplayLogin(true);
    document.querySelector("body").style.overflow = "hidden";
  };
  $(function () {
    $("#user").click(function () {
      console.log("ok");

      $("#profile").addClass("d-block").removeClass("d-none");
    });
    $("#close").click(function () {
      $("#profile").addClass("d-none").removeClass("d-block");
    });
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <Link to="/" className="nav-link ">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="list  ">
              <li className="nav-item">
                <NavLink to="/" className="listItem  nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/property" className="listItem nav-link">
                  Property
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className="listItem nav-link">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="listItem nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="listItem nav-link">
                  Contact
                </NavLink>
              </li>

              {isLoggedIn ? (
                <>
                  <li>
                    <BiUserCircle
                      style={{
                        height: "40px",
                        width: "40px",
                        color: "skyblue",
                      }}
                      id="user"
                    />
                  </li>
                  <div className="row d-none profileshow" id="profile">
                    <span
                      style={{
                        position: "absolute",
                        top: "-2px",
                        right: "-2px",
                        height: "max-content",
                        width: "max-content",
                        cursor: "pointer",
                      }}
                      id="close"
                    >
                      x
                    </span>
                    <div className="row r profile ">
                      <div className="col-2">
                        <BiUserCircle style={{ width: "max-content" }} />
                      </div>
                      <div className="col-10 ">
                        <span> {`${firstname} ${lastname}`}</span>
                      </div>
                    </div>
                    <hr style={{ margin: "2px" }} />
                    <button
                      style={{
                        color: "skyblue",
                        padding: "0px",
                        fontWeight: "lighter",
                      }}
                      className="btn"
                      // onClick={}
                    >
                      change password
                    </button>

                    <button
                      className=" btn row r justify-content-center"
                      onClick={() => navigate("/update")}
                    >
                      update
                    </button>
                    <button className=" btn row r justify-content-center">
                      property
                    </button>
                    <button
                      onClick={logoutHandled}
                      style={{ cursor: "pointer" }}
                      className="btn btn-danger row r justify-content-center"
                    >
                      logout
                    </button>
                  </div>
                  {/* */}
                  {/* <Logout setDisplay={setDisplay} /> */}
                </>
              ) : (
                <>
                  <li className="listItem nav-link">
                    <Button
                      variant="contained"
                      color="primary"
                      id="login-btn"
                      onClick={handleLogin}
                    >
                      sign up
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </>
      </nav>
      <Login displayLogin={displayLogin} setDisplayLogin={setDisplayLogin} />
      <PopUpBox
        setIsLoggedIn={setIsLoggedIn}
        display={display}
        setDisplay={setDisplay}
      />
    </>
  );
}
