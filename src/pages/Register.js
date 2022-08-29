import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import GoogleRegister from "../components/googleButtons/GoogleRegister";
import { gapi } from "gapi-script";
import BaseUrlContext from "../contextApi/BaseUrlContext";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import $ from "jquery";
const Register = ({ setDisplayLogin, setSignupVisible }) => {
  const { baseUrl } = useContext(BaseUrlContext);
  const url = `${baseUrl}/api/register`;
  const [error, setError] = useState();
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Password: "",
    Img: "string",
    ImgType: 1,
    UserType: 2,
    ServiceID: 1,
    Source: "DEVICE",
    Device: "ANDROID",
  });
  const client_id =
    "61367609219-3qovmj0ac2b1ipgb21dflds1db1kqcpk.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: client_id, scope: "" });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log("clicked");
    return fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: data.FirstName,
        LastName: data.LastName,
        Username: data.UserName,
        Password: data.Password,
        Source: data.Source,
        Device: data.Device,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        if (res.StatusCode === 200) {
          alert("you are successfully registered");
          setTimeout(() => {}, 1000);
        } else {
          alert("you are not registered");
        }
      })
      .catch((e) => console.log(e));
  };
  $(function () {
    $("#visible").on("click", function () {
      $("#notvisible").removeClass("d-none").addClass("d-block");
      $("#visible").addClass("d-none");
      $("#Password").attr("type", "password");
    });
    $("#notvisible").click(function () {
      $("#Password").attr("type", "text");
      $("#visible").removeClass("d-none").addClass("d-block");
      $("#notvisible").addClass("d-none");
    });
  });
  return (
    <div className="login-bin">
      <div
        className="login mx-auto"
        style={{
          width: "max-content",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "black",
            textTransform: "capitalize",
          }}
        >
          Create Your Gharelu Account
        </h1>
        <span>{error}</span>
        <Button
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            color: "red",
            fontSize: "18px",
            fontWeight: "bolder",
          }}
          onClick={() => {
            setDisplayLogin(false);
            document.querySelector("body").style.overflow = "scroll";
          }}
        >
          x
        </Button>
        <form onSubmit={(e) => handleForm(e)}>
          <div className="row">
            <div className="col-6">
              <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="FirstName"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  id="FirstName"
                  value={data.FirstName}
                  onChange={(e) => handleData(e)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LastName"
                  aria-describedby="basic-addon1"
                  id="LastName"
                  label="LastName"
                  onChange={(e) => handleData(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserName"
                  aria-describedby="basic-addon1"
                  id="UserName"
                  label="UserName"
                  value={data.UserName}
                  onChange={(e) => handleData(e)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-describedby="basic-addon1"
                  name="Password"
                  id="Password"
                  label="password"
                  onChange={(e) => handleData(e)}
                  value={data.Password}
                />
                <span className="input-group-text" id="basic-addon1">
                  <MdVisibility id="visible" className="d-none" />
                  <MdVisibilityOff id="notvisible" />
                </span>
              </div>
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-12" style={{ textAlign: "center" }}>
              <button
                type="submit"
                class="btn btn-danger mb-3 "
                style={{ width: "max-content", textAlign: "center" }}
              >
                Register
              </button>
              <div className="message">
                Already have an account
                <span
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() => setSignupVisible(false)}
                >
                  Sign In?
                </span>
              </div>
              <div className="message">or Sign Up with</div>
            </div>
            <div className="col-12" style={{ textAlign: "center" }}>
              <GoogleRegister />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
