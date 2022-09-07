import React, { useContext } from "react";

import { useNavigate } from "react-router";
import LoginContext from "../../contextApi/LoginContext";
import BaseUrlContext from "../../contextApi/BaseUrlContext";
import ProfileContext from "../../contextApi/ProfileContext";

import { GoogleLogin } from "react-google-login";

const client_id =
  "61367609219-3qovmj0ac2b1ipgb21dflds1db1kqcpk.apps.googleusercontent.com";
function GLogin({ setDisplayLogin }) {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, setProfileName } =
    useContext(LoginContext);
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
  const loginHandler = (res) => {
    console.log(res.profileObj);
    const username = res.profileObj.email;
    // const firstname = res.profileObj.givenName;
    // const lastname = res.profileObj.familyName;
    // console.log("fullname" + firstname + lastname);
    return fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: username,
        // FullName: firstname + " " + lastname,
        Password: "",
        NotificationToken: "string",
        Source: "GOOGLE",
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        // // alert(res.Message);
        // const response = res.LoginOutputs;
        // console.log(response);

        if (res.Message === "Success.") {
          // console.log(res);
          setIsLoggedIn(!isLoggedIn);
          setTimeout(() => {
            res.LoginOutputs[0].FullName
              ? setProfileName(res.LoginOutputs[0].FullName)
              : setProfileName(res.LoginOutputs[0].UserName);
            navigate("/");
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
            setDisplayLogin(false);
            localStorage.setItem("value", res.LoginOutputs[0].FullName);
            localStorage.setItem("uid", info.UID);
            document.querySelector("body").style.overflow = "scroll";
          }, 100);
        } else if (username === undefined) {
          alert("you should fill all the box");
        }
      })
      .catch((err) => console.log("error" + err));
  };
  const failureHandler = (res) => {
    console.log("login failed", res);
  };
  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     console.log("successful" + tokenResponse);
  //     // const hasAccess = hasGrantedAllScopesGoogle(
  //     //   tokenResponse,
  //     //   "google-scope-1",
  //     //   "google-scope-2"
  //     // );
  //   },
  //   flow: "auth-code",
  // });
  return (
    <GoogleLogin
      clientId={client_id}
      buttonText="login with google"
      onSuccess={loginHandler}
      onError={failureHandler}
      cookiePolicy="single_host_origin"
      isSignedIn={false}
      style={{ width: "100%", textAlign: "center" }}
      className="btn-login"
    >
      login with google
    </GoogleLogin>
  );
}
export default GLogin;
