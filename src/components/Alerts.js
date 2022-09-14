import React, { useEffect, useContext } from "react";
import ProfileContext from "../contextApi/ProfileContext";
import $ from "jquery";
// import "../index.css";
const Alerts = (props) => {
  const { setAlert } = useContext(ProfileContext);
  $(function () {
    // $(".close").click(function () {
    $(".alert").fadeIn();
    $(".alert").fadeOut(3000);
    console.log("asdashjdajshdjaksdh");
    // setInterval(() => {
    //   setAlert({
    //     msg: "",
    //     type: "",
    //   });
    // }, 3000);
    // });
  });

  return (
    props.alert.msg && (
      <div
        className={`alert alert-${props.alert.type} `}
        role="alert"
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 5,
          right: "5%",
          zIndex: 123456,
        }}
      >
        <strong>{props.alert.msg}</strong>
      </div>
    )

    // <div
    //   className={`alert alert-${type}  fade show`}
    //   role="alert"
    //   style={{
    //     position: "fixed",
    //     top: 5,
    //     left: 0,
    //     zIndex: 123456,
    //     left: "50%",
    //     textAlign: "center",
    //   }}
    // >
    //   <strong style={{ textTransform: "capitalize" }}>{type}</strong> {message}
    // </div>
  );
};

export default Alerts;
