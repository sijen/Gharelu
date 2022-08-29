import React, { useState, useContext } from "react";
import BaseUrlContext from "../../contextApi/BaseUrlContext";
import { GoogleLogin } from "react-google-login";
const GoogleRegister = () => {
  //   const username = res.profileObj.email;
  const client_id =
    "61367609219-3qovmj0ac2b1ipgb21dflds1db1kqcpk.apps.googleusercontent.com";
  const { baseUrl } = useContext(BaseUrlContext);
  const url = `${baseUrl}/api/register`;
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Password: "",
    Img: "string",
    ImgType: 1,
    UserType: 2,
    ServiceID: 1,
    Source: "GOOGLE",
    Device: "ANDROID",
  });
  // this is register function
  const registerHandler = (res) => {
    console.log(res.profileObj.givenName);
    console.log(res.profileObj.familyName);
    const newData = { ...data };
    newData.FirstName = res.profileObj.givenName;
    newData.LastName = res.profileObj.familyName;
    newData.UserName = res.profileObj.email;
    setData(newData);
    console.log(res);
    // e.preventDefault();
    console.log("clicked");
    return fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: res.profileObj.givenName,
        LastName: res.profileObj.familyName,
        Username: res.profileObj.email,
        Password: res.profileObj.googleId,
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
  const failureHandler = (res) => {
    console.log("login failed", res);
  };
  return (
    <GoogleLogin
      clientId={client_id}
      buttonText="login with google"
      onSuccess={(e) => registerHandler(e)}
      onError={failureHandler}
      cookiePolicy="single_host_origin"
      isSignedIn={false}
      style={{ width: "max-content", textAlign: "center" }}
    >
      Register With Google
    </GoogleLogin>
  );
};

export default GoogleRegister;
