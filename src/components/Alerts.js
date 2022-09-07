import React, { useEffect } from "react";
import $ from "jquery";

const Alerts = (props) => {
  useEffect(() => {
    $(function () {
      $(".alert").fadeOut(1000);
    });
  }, []);
  const { alert = "danger", message } = props;
  return (
    <div
      class={`alert alert-${alert} px-1 py-2`}
      role="alert"
      style={{
        width: "10%",
        textAlign: "center",
        position: "absolute",
        top: 5,
        left: "50%",
        fontWeight: "bold",
        zIndex: 123456,
      }}
    >
      {message}
    </div>
  );
};

export default Alerts;
