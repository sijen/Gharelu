import React, { useContext, useEffect, useState } from "react";
// import "./main.css";
// import office from "../../Assets/office.png";
import house from "../assets/houses.png";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import Slider from "./Slider";
import { FaUserTie } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper";
import "./mainpage.css";
import BaseUrlContext from "../contextApi/BaseUrlContext";

const MainPage = () => {
  const { baseUrl } = useContext(BaseUrlContext);
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/api/recent-property?Purpose=2`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setProperty(res.RecentPropertie);
        console.log(property);
      })
      .catch((err) => console.log("error" + err));
  }, []);
  return (
    <div className="main-container">
      <div className="slider">
        <ImageSlider baseUrl={baseUrl} />
        {/* <img src={office} alt="" height="300px" width="840px" /> */}
      </div>

      <div className="home-services">
        <div className="title-border">
          <h1>Home service</h1>
        </div>
        <div className="Slider-services">
          <Slider />
        </div>
        <div className="main-icon-container"></div>

        <div className="title-border">
          <h1>Best Houses for you</h1>
        </div>
        <div className="row " style={{ flexWrap: "nowrap", overflowX: "auto" }}>
          {property.map((property) => {
            const {
              Address,
              Area,
              AreaUnit,
              Title,
              Price,
              Purpose,
              UserFullName,
              UserImage,
              Type,
            } = property;
            return (
              <Card
                Address={Address}
                Area={Area}
                AreaUnit={AreaUnit}
                Title={Title}
                Price={Price}
                Purpose={Purpose}
                UserFullName={UserFullName}
                UserImage={UserImage}
                Type={Type}
              />
            );
          })}
        </div>
        <div className="best-title">
          <h1>Best House For You</h1>
          <h3>We are Offering Best Rental Services</h3>
        </div>
        <div className="title-border">
          <h1>Property on Sale</h1>
        </div>
        <div className="property-location">
          <h4>From-</h4>
          <span className="btn btn-light">Kathmandu</span>
          <span className="btn btn-light">Chitwan</span>
          <span className="btn btn-light">Nepalgunj</span>
          <span className="btn btn-light">Pokhara</span>
          <span className="btn btn-light">Butwal</span>
          <span className="btn btn-light">Birgungj</span>
        </div>
        <div className="row" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="title-border">
          <h1>Property on Rent</h1>
        </div>
        <div className="property-location">
          <h4>From-</h4>
          <button className="btn btn-light">Kathmandu</button>
          <button className="btn btn-light">Chitwan</button>
          <button className="btn btn-light">Nepalgunj</button>
          <button className="btn btn-light">Pokhara</button>
          <button className="btn btn-light">Butwal</button>
          <button className="btn btn-light">Birgungj</button>
        </div>
        <div className="row" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="title-border">
          <h1>Popular Blogs</h1>
        </div>
        <div className="row">
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>
    </div>
  );
};
const ImageSlider = ({ baseUrl }) => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/api/slider`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setSlider(res.Slider);
        console.log(res.Slider);
      })
      .catch((err) => console.log("error" + err));
  }, []);
  return (
    <Swiper
      className="main-slider"
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      modules={[Pagination, Autoplay]}
    >
      {slider.map((image) => {
        return (
          <SwiperSlide className="swiper-slide main-slide">
            <img src={image.SliderUrl} alt="" className="img" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
const Card = ({
  Address,
  Area,
  AreaUnit,
  Title,
  Price,
  Type,
  UserFullName,
  UserImage,
}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" alt="property-image" src={UserImage} />
        <span className="badge rounded-pill text-bg-primary">{Title}</span>
        <div className="card-body">
          <h1 className="card-title">{Type}</h1>
          <h5 className="h5">
            <MdLocationPin /> {Address}
          </h5>
          <div className="num-detail">
            <span>
              <BsFillHouseDoorFill /> {Area} {AreaUnit}
            </span>
            <span>Rs {Price}</span>
          </div>
        </div>
        <div className="card-owner">
          {UserImage ? (
            <img
              src={UserImage}
              style={{ height: "20px", width: "20px", borderRadius: "50%" }}
            />
          ) : (
            <FaUserTie />
          )}
          <span className="owner">By {UserFullName}</span>
        </div>
      </div>
    </div>
  );
};
const PopularCard = () => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" alt="" src={h3} />
        <div className="card-body">
          <h1 className="card-title">Single family</h1>
          <h5 className="h5">
            <MdLocationPin /> Kalimati,Kathmandu
          </h5>
          <div className="num-detail">
            <span>
              <BsFillHouseDoorFill /> 3500 sqft
            </span>
            <span>Rs 90,000</span>
          </div>
        </div>
        <div className="card-owner">
          <FaUserTie /> <span className="owner">By Admin</span>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
