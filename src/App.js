import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Sharedlayout from "./pages/Sharedlayout";
import UserUpdate from "./components/UserUpdate";

import { Routes, Route, Link } from "react-router-dom";
import { LoginProvider } from "./contextApi/LoginContext";
import { BaseUrlProvider } from "./contextApi/BaseUrlContext";
import { ProfileProvider } from "./contextApi/ProfileContext";
export default function App() {
  return (
    <LoginProvider>
      <ProfileProvider>
        <BaseUrlProvider>
          <Routes>
            <Route path="/" element={<Sharedlayout />}>
              <Route index element={<Home />} />
              <Route path="/property" element={<Property />} />
              <Route path="/service" element={<Service />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/update" element={<UserUpdate />} />
            </Route>

            <Route
              path="*"
              element={
                <center>
                  <h2>404</h2>
                  <p>page not found</p>
                  <Link to="/">back to home</Link>
                </center>
              }
            />
          </Routes>
        </BaseUrlProvider>
      </ProfileProvider>
    </LoginProvider>
  );
}
