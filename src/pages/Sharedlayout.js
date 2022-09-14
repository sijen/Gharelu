import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileContext from "../contextApi/ProfileContext";
import Alerts from "../components/Alerts";

function Sharedlayout() {
  const { alert } = useContext(ProfileContext);

  return (
    <>
      <Navbar />
      <Alerts alert={alert} />
      <Outlet />
    </>
  );
}
export default Sharedlayout;
