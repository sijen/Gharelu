import { createContext, useState } from "react";
const LoginContext = createContext();
export function LoginProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileName, setProfileName] = useState();
  return (
    <LoginContext.Provider
      value={{ isLoggedIn, profileName, setIsLoggedIn, setProfileName }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
