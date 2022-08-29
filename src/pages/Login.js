import React, { useState, useContext, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { useNavigate } from "react-router";
import LoginContext from "../contextApi/LoginContext";
import GLogin from "../components/googleButtons/GLogin";
import { gapi } from "gapi-script";
import "./login.css";
import Register from "./Register";
import BaseUrlContext from "../contextApi/BaseUrlContext";
import ProfileContext from "../contextApi/ProfileContext";
// import FacebookLogin from "react-facebook-login";
import $ from "jquery";

const client_id =
  "61367609219-3qovmj0ac2b1ipgb21dflds1db1kqcpk.apps.googleusercontent.com";
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "500px",
    height: "max-content",
    marginTop: theme.spacing(1),
  },
}));

export default function Login({ displayLogin, setDisplayLogin }) {
  const [signupValue, setSignupVisible] = useState(true);

  return (
    displayLogin &&
    (signupValue ? (
      <Register
        setDisplayLogin={setDisplayLogin}
        setSignupVisible={setSignupVisible}
      />
    ) : (
      <UserLogin
        displayLogin={displayLogin}
        setDisplayLogin={setDisplayLogin}
        setSignupVisible={setSignupVisible}
      />
    ))
  );
}
const UserLogin = ({ displayLogin, setDisplayLogin, setSignupVisible }) => {
  const { baseUrl } = useContext(BaseUrlContext);
  const {
    firstname,
    setFirstname,
    setLastname,
    setContact,
    setAddress,
    setDistrict,
    setLong,
    setLat,
    setUid,
    setBio,
    setImage,
    setEmail,
  } = useContext(ProfileContext);
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, setProfileName } =
    useContext(LoginContext);
  useEffect(() => {
    setIsLoggedIn(false);
    function start() {
      gapi.client.init({ clientId: client_id, scope: "" });
    }
    gapi.load("client:auth2", start);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log();
    fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        NotificationToken: "string",
        Source: "DEVICE",
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setError(res.Message);
        const response = res.LoginOutputs;
        // console.log(response[0].FullName);

        if (res.Message === "Success.") {
          setIsLoggedIn(!isLoggedIn);
          setTimeout(() => {
            //for full name and lastname index 0 is first name and 1 is last name

            let name = res.LoginOutputs[0].FullName;
            const myArray = name.split(" ");
            console.log(myArray[0]);
            setFirstname(myArray[0]);
            setLastname(myArray[1]);
            console.log("firstname", firstname);

            let info = res.LoginOutputs[0];
            //setting value to use in update user page
            setContact(info.Contact);
            setAddress(info.Address);
            setDistrict(info.District);
            setLong(info.Longitude);
            setLat(info.Latitude);
            setUid(info.UID);
            setBio(info.Bio);
            setImage(info.Image);
            setEmail(info.Email);
            setProfileName(res.LoginOutputs[0].FullName);
            navigate("/");
            setDisplayLogin(false);
            document.querySelector("body").style.overflow = "scroll";
          }, 100);
        } else if (username === undefined || password === undefined) {
          setError("you should fill all the box");
        }
      })
      .catch((err) => console.log("error" + err));
  };
  $(function () {
    $("#visible").on("click", function () {
      $("#notvisible").removeClass("d-none").addClass("d-block");
      $("#visible").addClass("d-none");
      $("#password").attr("type", "password");
    });
    $("#notvisible").click(function () {
      $("#password").attr("type", "text");
      $("#visible").removeClass("d-none").addClass("d-block");
      $("#notvisible").addClass("d-none");
    });
  });

  return (
    <div className="login-bin">
      <div className="login">
        <CssBaseline />
        {/* <Grid item xs={false} md={7} className={classes.image} /> */}
        <Grid component={Paper}>
          <div className={classes.paper}>
            <Button
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
              onClick={() => {
                setDisplayLogin(false);
                document.querySelector("body").style.overflow = "scroll";
              }}
            >
              x
            </Button>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div
              style={{
                textAlign: "center",
                textTransform: "capitalize",
                fontWeight: "bolder",
                color: "red",
              }}
            >
              {error}
            </div>
            <form className={classes.form}>
              <div className="row align-items-center">
                <div className="col-6">
                  {/* <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="email"
                      label="Email Address"
                    /> */}
                  <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="email"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="input-group-text" id="basic-addon1">
                      <MdVisibility id="visible" className="d-none" />
                      <MdVisibilityOff id="notvisible" />
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="btn-login"
                    onClick={handleSubmit}
                  >
                    {isLoggedIn ? (
                      <span>loading ....</span>
                    ) : (
                      <span>Log In</span>
                    )}
                  </Button>
                  <div className="message">
                    Don't have an account
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                      onClick={() => setSignupVisible(true)}
                    >
                      {" "}
                      Sign Up?
                    </span>
                  </div>
                  <div className="message">or login with</div>
                  {/* <FacebookLogin
                      appId="442521547901932"
                      autoLoad={false}
                      fields="name,email,picture"
                      scope="public_profile,user_friends"
                      callback={responseFacebook}
                      icon="fa-facebook"
                      className="btn-login"
                    /> */}
                  <GLogin
                    displayLogin={displayLogin}
                    setDisplayLogin={setDisplayLogin}
                  />
                </div>
              </div>
            </form>
          </div>
        </Grid>
      </div>
    </div>
  );
};
