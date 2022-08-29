import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import LoginContext from "../contextApi/LoginContext";
const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, []);
  return (
    <section>
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, vel,
        sunt doloremque dolorum incidunt suscipit, quaerat iusto eveniet dolorem
        error ab. Odio, tempora fuga dignissimos quas possimus quos pariatur
        minus!
      </p>
    </section>
  );
};
export default Dashboard;
