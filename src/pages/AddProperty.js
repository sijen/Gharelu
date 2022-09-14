import React, { useContext, useState, useEffect } from "react";
import BaseUrlContext from "../contextApi/BaseUrlContext";
import LoginContext from "../contextApi/LoginContext";
import ProfileContext from "../contextApi/ProfileContext";
import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

import "./addproperty.css";

const AddProperty = () => {
  const navigate = useNavigate();
  const { baseUrl } = useContext(BaseUrlContext);
  const { showAlert } = useContext(ProfileContext);
  const uid = localStorage.getItem("uid"); //for user identification
  const { isLoggedIn } = useContext(LoginContext);

  const [imagesrc, setImagesrc] = useState([]);
  const [uploadsrc, setUploadsrc] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const [imageName, setImageName] = useState(null);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [pricePer, setPricePer] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [areaUnit, setAreaUnit] = useState("");
  const [type, setType] = useState("");

  const addProperty = () => {
    console.log(
      "address",
      address,
      "city",
      city,
      "purpose i=",
      purpose,
      "type i=",
      type,
      "category i=",
      category,
      "price s=",
      price,
      "priceper i=",
      pricePer,
      "address s",
      address,
      "area s=",
      area,
      "areaunit",
      areaUnit,
      "state = ",
      state
    );

    if (
      !(
        imagesrc &&
        uploadsrc &&
        isUploaded &&
        imageName &&
        title &&
        des &&
        purpose &&
        category &&
        price &&
        pricePer &&
        address &&
        state &&
        district &&
        city &&
        area &&
        areaUnit &&
        type
      )
    ) {
      // alert("you must enter all the highlighgted fields");
      $(function () {
        $(".form-control").addClass("errorControl");
        $(".form-select").addClass("errorControl");
        $("#picture").addClass("errorControl");
      });
    } else {
      $(function () {
        $(".form-control").css("border", "1px solid black");
        $(".form-select").css("border", "1px solid black");
        $("#picture").css("border", "1px solid black");
      });
      var inputs = document.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        var this_input = inputs[i];
        if (this_input.type === "radio") {
          this_input.style.border = "1px solid red";
        }
      }
    }
    return fetch(`${baseUrl}/api/add-property`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserID: uid,
        OrganzationId: -1,
        Title: title,
        Slug: "Land-sale-on-baniyatar",
        Description: des,
        Tags: "Land,sale,on,baniyatar",
        Purpose: purpose,
        Type: type,
        Category: category,
        Furnishing: 1,
        Diningroom: 1,
        Kitchen: 1,
        BedRoom: 1,
        BathRoom: 1,
        Hall: 1,
        TotalFloor: 1,
        Parking: "string",
        Price: price,
        PricePer: pricePer,
        IsNegiotable: 1,
        Address: address,
        State: state,
        District: district,
        City: city,
        Latitude: "0",
        Longitude: "0",
        TotalArea: area,
        TotalAreaUnit: areaUnit,
        BuiltArea: "string",
        BuiltAreaUnit: 1,
        BuiltYear: "string",
        RoadAccess: "string",
        RoadAccessUnit: 1,
        PropertyFacing: 1,
        Contact: "98",
        Attachment: [
          {
            // data:image/png;base64,
            ImageUrl: uploadsrc,
            ImageName: imageName,
          },
        ],
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        if (res.Message === "Success") {
          // alert("added successful");
          setIsUploaded(false);
          setImageName("");
          setTitle("");
          setDes("");
          setPurpose("");
          setCategory("");
          setPrice("");
          setPricePer("");
          setAddress("");
          setState("");
          setDistrict("");
          setCity("");
          setArea("");
          setAreaUnit("");
          setType("");
          showAlert("property added!", "success");
          // var div = document.getElementsByTagName("div");
          var inputs = document.getElementsByTagName("input");
          for (var i = 0; i < inputs.length; i++) {
            var this_input = inputs[i];
            if (this_input.type === "radio") {
              this_input.checked = false;
            }
          }
        } else {
          showAlert("you must not leave any field empty", "danger");
        }
      })
      .catch((err) => console.log("error", err));
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageName(e.target.files[0].name);
      // console.log("asdasd", e.target.files[0].name);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImagesrc(e.target.result);
        // console.log("asdasd", e.target.result);
        const src = e.target.result.split(",");
        setUploadsrc(src[1]);
        setIsUploaded(true);
      };
      console.log("image src", uploadsrc);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const options = [
    {
      label: "state 1",
      value: "1",
    },
    {
      label: "state 2",
      value: "2",
    },
    {
      label: "state 3",
      value: "3",
    },
    {
      label: "state 4",
      value: "4",
    },
    {
      label: "state 5",
      value: "5",
    },
  ];
  const getValue = localStorage.getItem("value");
  useEffect(() => (getValue ? undefined : navigate("/")), []);
  return (
    <>
      <div className="container justify-content-center mainaddproperty">
        <h2 className="text-align-center">Edit Profile</h2>
        {/* UPLOAD PHOTO */}
        <div className="row px-3 px-3justify-content-center userprofile">
          <div className="col-4 p-0 ">
            {isUploaded ? (
              <div className="ImagePreview">
                <ImCross
                  color="white"
                  className="close-icon"
                  alt="CloseIcon"
                  style={{ cursor: "pointer" }}
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
                  className="image"
                />
              </div>
            ) : (
              <div className="ImagePreview">
                <label
                  htmlhtmlfor="upload-input"
                  id="picture"
                  className="p-0"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <AiOutlinePlus
                    draggable={"false"}
                    alt="placeholder"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "1px solid black",
                    }}
                  />
                </label>

                <input
                  id="upload-input"
                  className="custom-file-input file-in"
                  style={{ opacity: 0, cursor: "pointer" }}
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>
          <div className="col pe-0">
            <div className="row px-3">
              <label className="p-0">Title *</label>
              <input
                placeholder="title"
                className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="row px-3">
              <label className="p-0">Description *</label>
              <textarea
                placeholder="Description"
                row="15"
                className="form-control"
                value={des}
                onChange={(e) => setDes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="row px-3">
          <div className="col p-0 pe-2">
            <label className="p-0">address *</label>
            <input
              placeholder="address"
              className=" form-control"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col p-0 pe-2">
            <label className="p-0">city *</label>
            <input
              placeholder="address"
              className=" form-control"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col p-0 pe-2">
            <label className="p-0">state *</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                console.log("int", e.target.value);
              }}
            >
              <option>select state</option>
              {options.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col p-0 ">
            <label className="p-0">district *</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row px-3">
          <div className="col-6 p-0 p-0 pe-2">
            <label className="p-0 ">price *</label>
            <input
              placeholder="price"
              className=" form-control"
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="col-6 p-0 p-0">
            <label className="p-0">price per *</label>
            {/* <input
              placeholder="district"
              className=" form-control"
              type="number"
            /> */}
            <select
              className="form-select"
              aria-label="Default select example"
              value={pricePer}
              onChange={(e) => {
                setPricePer(e.target.value);
              }}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row px-3">
          <div className="col-6 p-0 p-0 pe-2 ">
            <label className="p-0">area *</label>
            <input
              placeholder="area"
              className=" form-control"
              type="text"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
            />
          </div>
          <div className="col-6 p-0 p-0 ">
            <label className="p-0">area unit *</label>
            {/* <input
              placeholder="area unit"
              className=" form-control"
              type="text"
            /> */}
            <select
              className="form-select"
              aria-label="Default select example"
              value={areaUnit}
              onChange={(e) => {
                setAreaUnit(e.target.value);
              }}
            >
              <option>Open this select menu</option>
              <option value="1" id="1">
                One
              </option>
              <option value="2" id="2">
                Two
              </option>
              <option value="3" id="3">
                Three
              </option>
            </select>
          </div>
        </div>
        <div className="row px-3 p-0">
          <label className="p-0">Category *</label>
        </div>
        <div className=" px-3 p-0" style={{ height: "34px" }}>
          <input
            type="radio"
            name="category"
            id="house"
            onClick={(e) => {
              setCategory(1);
              console.log("id", e.target.id);
            }}
          />
          <label htmlFor="house">
            <span>house</span>
          </label>
          <input
            type="radio"
            name="category"
            id="land"
            onClick={(e) => {
              console.log("id", e.target.id);
              setCategory(2);
            }}
          />
          <label htmlFor="land">
            <span>land</span>
          </label>
          <input
            type="radio"
            name="category"
            id="flats"
            onClick={(e) => {
              console.log("id", e.target.id);
              setCategory(3);
            }}
          />
          <label htmlFor="flats">
            <span>flats</span>
          </label>
          <input
            type="radio"
            name="category"
            id="office"
            onClick={(e) => {
              console.log("id", e.target.id);
              setCategory(4);
            }}
          />
          <label htmlFor="office">
            <span>office</span>
          </label>
          <input
            type="radio"
            name="category"
            id="shops"
            onClick={(e) => {
              console.log("id", e.target.id);
              setCategory(5);
            }}
          />
          <label htmlFor="shops">
            <span>shops</span>
          </label>
          <input
            type="radio"
            name="category"
            id="apartment"
            onClick={(e) => {
              console.log("id", e.target.id);
              setCategory(6);
            }}
          />
          <label htmlFor="apartment">
            <span>apartment</span>
          </label>
        </div>
        <div className="row px-3 p-0 ">
          <div className="col-6 p-0">
            <label className="p-0">Purpose *</label>
          </div>
          <div className="col-6 p-0">
            <label className="p-0">type *</label>
          </div>
        </div>
        <div className="row px-3 p-0 mb-4 " style={{ height: "34px" }}>
          <div className="col-6 p-0">
            <input
              type="radio"
              name="purpose"
              id="rent"
              onClick={(e) => {
                setPurpose(1);
              }}
            />
            <label htmlFor="rent">
              <span>rent</span>
            </label>
            <input
              type="radio"
              name="purpose"
              id="sale"
              onClick={(e) => {
                setPurpose(2);
              }}
            />
            <label htmlFor="sale">
              <span>sale</span>
            </label>
          </div>
          <div className="col-6 p-0">
            <input
              type="radio"
              name="type"
              id="residental"
              onClick={(e) => {
                setType(1);
              }}
            />
            <label htmlFor="residental">
              <span>residental</span>
            </label>
            <input
              type="radio"
              name="type"
              id="commercial"
              onClick={(e) => {
                setType(2);
              }}
            />
            <label htmlFor="commercial">
              <span>commercial</span>
            </label>
          </div>
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
