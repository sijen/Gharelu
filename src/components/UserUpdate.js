import React, { useEffect, useContext } from "react";
import BaseUrlContext from "../contextApi/BaseUrlContext";
import ProfileContext from "../contextApi/ProfileContext";
import LoginContext from "../contextApi/LoginContext";
import { useNavigate } from "react-router-dom";

import { BiUserCircle } from "react-icons/bi";

import "./userupdate.css";

const UserUpdate = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);
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
  useEffect(() => (isLoggedIn ? null : navigate("/")), []);

  const updateHandled = () => {
    return fetch(`${baseUrl}/api/user-profile`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserID: uid,
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Image: "",
        ImageName: "",
        Contact: contact,
        Address: address,
        District: 1,
        Bio: bio,
        Latitude: lat,
        Longitude: long,
        WorkStatus: 2,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("updated", res);
      })
      .catch((err) => console.log("error" + err));
  };
  return (
    <>
      <div className="container justify-content-center mainuserprofile">
        <h2 className="text-align-center">Edit Profile</h2>
        <div className="row justify-content-center userprofile">
          <BiUserCircle
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          />
          <input type="file" className="custom-file-input" />
        </div>
        <div className="row">
          <div className="col-6 px-3">
            <label>Firstname</label>
            <input
              placeholder="FirstName"
              className="form-control"
              type="text"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              value={firstname}
            />
          </div>
          <div className="col-6 px-3">
            <label>Lastname</label>
            <input
              placeholder="LastName"
              className=" form-control"
              type="text"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              value={lastname}
            />
          </div>
        </div>
        <div className="row px-3">
          <label className="p-0">Email</label>
          <input
            placeholder="Email"
            className=" form-control"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="row px-3">
          <label className="p-0">Contact</label>
          <input
            placeholder="Contact"
            className=" form-control"
            type="number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
            value={contact}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-6 px-3">
            <label>Address</label>
            <input
              placeholder="Address"
              className=" form-control"
              type="text"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
            />
          </div>
          <div className="col-6 px-3">
            <label>District</label>
            <input
              placeholder="District"
              className=" form-control"
              type="text"
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              value={district}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 px-3">
            <label>Longitude</label>
            <input
              placeholder="Longitude"
              className=" form-control"
              type="number"
              onChange={(e) => {
                setLong(e.target.value);
              }}
              value={long}
            />
          </div>
          <div className="col-6 px-3">
            <label>Latitude</label>
            <input
              placeholder="Latitude"
              className=" form-control"
              type="number"
              onChange={(e) => {
                setLat(e.target.value);
              }}
              value={lat}
            />
          </div>
        </div>
        <div className="row my-2 px-3">
          <label>Bio</label>
          <textarea
            placeholder="Bio"
            row="6"
            className="form-control"
            onChange={(e) => {
              setBio(e.target.value);
            }}
            value={bio}
          ></textarea>
        </div>
        <div className="row my-2 px-3">
          <button className="btn btn-primary" onClick={updateHandled}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default UserUpdate;
