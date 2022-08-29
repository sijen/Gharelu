import { createContext, useState } from "react";
const BaseUrlContext = createContext();

export const BaseUrlProvider = (props) => {
  const baseUrl = "https://testing.esnep.com/gharelukam";
  return (
    <BaseUrlContext.Provider value={{ baseUrl }}>
      {props.children}
    </BaseUrlContext.Provider>
  );
};
export default BaseUrlContext;
