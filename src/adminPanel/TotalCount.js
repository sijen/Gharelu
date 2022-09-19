import pricetag from "../assets/icons/pricetag.png";
import screen from "../assets/icons/screen.png";
import store from "../assets/icons/store.png";

import { LineChart } from "./component/LineChart";
import PieChart from "./component/PieChart";
import "./totalcount.css";
export const TotalCount = () => {
  return (
    <div className="col-11">
      <div className="boxes">
        <Box title="Total Sales" text="20,20" image={store} />
        <Box title="Total income" text="20,20" image={pricetag} />
        <Box title="Total Views" text="20,20" image={screen} />
      </div>
      <section className="charts row">
        <LineChart />
        <PieChart />
      </section>
      <section className="recent">
        <h1>recent customer</h1>
        <div className="recentTable">
          <RecntLine />
          <RecntLine />
          <RecntLine />
          <RecntLine />
          <RecntLine />
        </div>
      </section>
    </div>
  );
};
const RecntLine = () => {
  return (
    <div className="recentLine">
      <h2>Jhon smith</h2>
      <div>
        <div>2 aug, 2022 </div>
        <span>Joined </span>
      </div>
      <div>
        <div>9876124356 </div>
        <span>Phone No. </span>
      </div>
      <div>
        <div>kathmandu,Nepal</div>
        <span>location </span>
      </div>
      <div className="btn-group">
        <button className="btn btn-outline-secondary">options</button>
        <button className="btn btn-primary">details</button>
      </div>
    </div>
  );
};
const Box = ({ title, text, image }) => {
  return (
    <div className="box">
      <h2>{title}</h2>
      <div className="lwrbox">
        <span>{text}</span>
        <img src={image} alt="no image" className="boxicon" />
      </div>
    </div>
  );
};
