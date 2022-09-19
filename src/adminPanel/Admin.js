import React from "react";

import "./admin.css";

import { AdminNav } from "./AdminNav";
import { AdminSideNav } from "./AdminSideNav";
import { TotalCount } from "./TotalCount";
const Admin = () => {
  return (
    <>
      <AdminNav />
      <div className="container-fluid">
        <div className="row">
          <AdminSideNav />
          <TotalCount />
        </div>
      </div>
    </>
  );
};

export default Admin;
