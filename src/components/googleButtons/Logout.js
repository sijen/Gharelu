import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = ({ setDisplay }) => {
  const client_id =
    "61367609219-3qovmj0ac2b1ipgb21dflds1db1kqcpk.apps.googleusercontent.com";
  const logoutSuccess = () => {
    setDisplay(true);
  };
  return (
    <GoogleLogout
      clientId={client_id}
      buttonText="logout"
      onLogoutSuccess={logoutSuccess}
    />
  );
};

export default Logout;
