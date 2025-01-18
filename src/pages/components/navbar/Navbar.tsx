import "./navbar.css";
import Nav0 from "./Nav0";
import Nav1 from "./Nav1Up";
import Nav2 from "./Nav2";
import Nav3 from "./Nav3";
import NavMotion1 from "./NavMotion1";

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <div>
        <Nav0 />
        <Nav1 />
        <Nav2 />
        <Nav3 />
        <NavMotion1 />
      </div>
    </div>
  );
}
