import bar_chart from "../assets/icons/bar_chart.png";
import calendar from "../assets/icons/calendar.png";
import file from "../assets/icons/file.png";
import group from "../assets/icons/group.png";
import home from "../assets/icons/home.png";
import image from "../assets/icons/image.png";
import settings from "../assets/icons/settings.png";
import search from "../assets/icons/search.png";
import upload from "../assets/icons/upload.png";
export const AdminSideNav = () => {
  return (
    <div className="sidenav col-1">
      <div className="icon_box">
        <img src={search} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={home} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={file} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={bar_chart} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={upload} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={image} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={calendar} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={group} alt="search" className="icon" />
      </div>
      <div className="icon_box">
        <img src={settings} alt="search" className="icon" />
      </div>
    </div>
  );
};
