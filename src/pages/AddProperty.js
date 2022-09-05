import React, { useContext, useState, useEffect } from "react";
import BaseUrlContext from "../contextApi/BaseUrlContext";
import ProfileContext from "../contextApi/ProfileContext";
import LoginContext from "../contextApi/LoginContext";
import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import "./addproperty.css";

const AddProperty = () => {
  const navigate = useNavigate();
  const { baseUrl } = useContext(BaseUrlContext);
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    contact,
    setContact,
    address,
    setAddress,
    district,
    setDistrict,
    long,
    setLong,
    lat,
    setLat,
    bio,
    setBio,
    uid,
    setUid,
    image,
    setImage,
  } = useContext(ProfileContext);
  const { isLoggedIn } = useContext(LoginContext);
  // useEffect(() => (isLoggedIn ? null : navigate("/")), []);
  const addProperty = () => {
    return fetch(`${baseUrl}/api/add-property`, {
      method: "POST",
      body: JSON.stringify({
        UserID: 1,
        OrganzationId: -1,
        Title: "Land sale on baniyatar",
        Slug: "Land-sale-on-baniyatar",
        Description: "Land sale on baniyatar",
        Tags: "Land,sale,on,baniyatar",
        Purpose: 1,
        Type: 1,
        Category: 1,
        Furnishing: 1,
        Diningroom: 1,
        Kitchen: 1,
        BedRoom: 1,
        BathRoom: 1,
        Hall: 1,
        TotalFloor: 1,
        Parking: "string",
        Price: "string",
        PricePer: 1,
        IsNegiotable: 1,
        Address: "string",
        State: "1",
        District: "1",
        City: "string",
        Latitude: "0",
        Longitude: "0",
        TotalArea: "string",
        TotalAreaUnit: 1,
        BuiltArea: "string",
        BuiltAreaUnit: 1,
        BuiltYear: "string",
        RoadAccess: "string",
        RoadAccessUnit: 1,
        PropertyFacing: 1,
        Contact: "98",
        Attachment: [
          {
            // ImageUrl:
            ImageName: "dsaaf",
          },
        ],
      }),
    });
  };
  const [imagesrc, setImagesrc] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState();
  const handleImageChange = (e) => {
    setImagesrc(e.target.files[0]);
    console.log("file", imagesrc);
    setIsUploaded(true);
    setTypeFile(e.target.files[0].type);
    let reader = new FileReader();

    reader.onload = function (e) {
      setImagesrc(e.target.result);
      console.log(e.target.result);

      setIsUploaded(true);
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <div className="container justify-content-center mainaddproperty">
        <h2 className="text-align-center">Edit Profile</h2>

        <div className="row px-3">
          <label className="p-0">Title</label>
          <input placeholder="title" className="form-control" type="text" />
        </div>
        <div className="row px-3">
          <label className="p-0">Description</label>
          <textarea
            placeholder="Description"
            row="15"
            className="form-control"
          ></textarea>
        </div>
        <div className="row px-3">
          <div className="col p-0 pe-2">
            <label className="p-0">address</label>
            <input
              placeholder="address"
              className=" form-control"
              type="text"
            />
          </div>
          <div className="col p-0 pe-2">
            <label className="p-0">address</label>
            <input
              placeholder="address"
              className=" form-control"
              type="text"
            />
          </div>
          <div className="col p-0 pe-2">
            <label className="p-0">address</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col p-0 ">
            <label className="p-0">address</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row px-3">
          <div className="col-6 p-0 p-0 pe-2">
            <label className="p-0 ">price</label>
            <input
              placeholder="price"
              className=" form-control"
              type="number"
            />
          </div>
          <div className="col-6 p-0 p-0">
            <label className="p-0">price per</label>
            {/* <input
              placeholder="district"
              className=" form-control"
              type="number"
            /> */}
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row px-3">
          <div className="col-6 p-0 p-0 pe-2 ">
            <label className="p-0">area</label>
            <input placeholder="area" className=" form-control" type="text" />
          </div>
          <div className="col-6 p-0 p-0 ">
            <label className="p-0">area unit</label>
            {/* <input
              placeholder="area unit"
              className=" form-control"
              type="text"
            /> */}
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row px-3 p-0 justify-content-between">
          <label className="p-0">Category</label>
          <button className="btn btn-secondary">house</button>
          <button className="btn btn-secondary">house</button>
          <button className="btn btn-secondary">house</button>
          <button className="btn btn-secondary">house</button>
          <button className="btn btn-secondary">house</button>
          <button className="btn btn-secondary">house</button>
          <button className="btn btn-secondary">house</button>
        </div>
        <div className="row px-3 p-0 ">
          <div className="col-6 p-0">
            <label className="p-0">Purpose</label>
          </div>
          <div className="col-6 p-0">
            <label className="p-0">type</label>
          </div>
        </div>
        <div className="row px-3 p-0 mb-4 ">
          <div className="col-6 p-0">
            <button className="btn btn-secondary me-2">rent</button>
            <button className="btn btn-secondary">sell</button>
          </div>
          <div className="col-6 p-0">
            <button className="btn btn-secondary me-2">rent</button>
            <button className="btn btn-secondary">sell</button>
          </div>
        </div>
        {/* UPLOAD PHOTO */}
        <div className="row px-3 px-3justify-content-center userprofile">
          {isUploaded ? (
            <div className="ImagePreview">
              <ImCross
                className="close-icon"
                alt="CloseIcon"
                onClick={() => {
                  setIsUploaded(false);
                  setImagesrc(null);
                }}
              />

              <img
                id="uploaded-image"
                src={imagesrc}
                draggable={false}
                alt="uploaded-img"
              />
            </div>
          ) : (
            <>
              <label
                htmlFor="upload-input"
                style={{
                  textAlign: "center",
                }}
              >
                <AiOutlinePlus
                  draggable={"false"}
                  alt="placeholder"
                  style={{
                    width: 90,
                    height: 100,
                    border: "1px solid black",
                  }}
                />
              </label>

              <input
                id="upload-input"
                className="custom-file-input"
                style={{ display: "none" }}
                type="file"
                accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>
        <div className="row px-3 justify-content-center mt-3">
          <button className="btn btn-primary" onClick={addProperty}>
            AddProperty
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
