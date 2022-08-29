import React from "react";
import { ArrowBackSharp } from "@material-ui/icons";
import "./mainpagelogin.css";
const MainPageLogin = () => {
  return (
    <aside className="sideForm">
      <h2 className="form-title">Find Best services for your home </h2>
      <div style={{ display: "flex" }}>
        <label className="tag purpose">purpose</label>
        <span
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
            marginLeft: "20px",
          }}
        >
          <button type="button" className="btn btn-light">
            All
          </button>
          <button type="button" className="btn btn-light">
            Sale
          </button>
        </span>
      </div>
      <label htmlFor="Search" className="form-label">
        Search
      </label>
      <input type="search" className="form-control" />
      <div className="row pe-0">
        <div className="col-sm">
          <label>Address</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm p-xm-0">
          <label>City</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row pe-0">
        <div className="col-sm">
          <label>State</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm p-xm-0">
          <label>Dsitrict</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row pe-0">
        <div className="col-sm">
          <label>Min Price</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-sm p-xm-0">
          <label>Max Price</label>
          <input type="number" className="form-control" />
        </div>
      </div>
      <div className="row pe-0">
        <div className="col-sm">
          <label>Min Area</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-sm p-xm-0">
          <label>Max Area</label>
          <input type="number" className="form-control" />
        </div>
      </div>
      <label>Purposes</label>
      <div className="button_grp">
        <button type="button" className="btn btn-light btn-p">
          All
        </button>
        <button type="button" className="btn btn-light btn-p">
          House
        </button>
        <button type="button" className="btn btn-light btn-p">
          Land
        </button>
        <button type="button" className="btn btn-light btn-p">
          Flats
        </button>
        <button type="button" className="btn btn-light btn-p">
          Appartment
        </button>
        <button type="button" className="btn btn-light btn-p">
          Shops
        </button>
        <button type="button" className="btn btn-light btn-p">
          Office
        </button>
      </div>
      <div className="search-below">
        <span
          className="arrowback" //onClick={props.change}
        >
          <ArrowBackSharp />
          Search home Service
        </span>
        <span className="se-btn">
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </span>
      </div>
    </aside>
  );
};

export default MainPageLogin;
