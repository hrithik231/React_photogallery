import { NavLink } from "react-router-dom";
import "./App.css";
function Menu() {
  function change() {
    document.body.style.backgroundColor = "black";
  }
  function dbchange() {
    document.body.style.backgroundColor = "skyblue";
  }
  return (
    <div className="menu">
      <NavLink exact activeClassName="active_class" to="/" className="link1">
        Home
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/cars"
        className="link1"
      >
        Cars
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/flowers"
        className="link1"
      >
        Flowers
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/mountains"
        className="link1"
      >
        Mountains
      </NavLink>
      <button className="color" onClick={change} onDoubleClick={dbchange}>
        Lights_OFF / ON
      </button>
    </div>
  );
}
export default Menu;
