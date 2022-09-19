import menu from "../assets/icons/menu.png";
import person from "../assets/icons/person.png";
import Logo from "../logo.png";
export const AdminNav = () => {
  return (
    <nav className="navbar-ii justify-content-between m-0">
      <div className="nav-left">
        <div className="icon_box">
          <img
            src={menu}
            alt="menu"
            className="icon"
            style={{ display: "inline" }}
          />
        </div>
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="">
        <ul className="list p-0">
          <li
            className="nav-item"
            style={{ flexDirection: "column", alignItems: "flex-end" }}
          >
            <div className="name">Sijen dangol</div>
            <span className="position">position</span>
          </li>
          <li className="icon_box">
            <img src={person} alt="user" className="icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
