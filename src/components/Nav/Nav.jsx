import "./nav.scss";
import raftLogo from "/import.png";

function Nav() {
  return (
    <div className="header">
      <nav className="header_nav">
        <div className="header_nav_item-1">
          <figure>
            <img src={raftLogo} alt="Raft logo" />
          </figure>
          <h1>Raft</h1>
        </div>
        <div className="header_nav_item-2">
          <ul>
            <li>Solutions</li>
            <li>Learn</li>
            <li>About</li>
          </ul>
        </div>
        <div className="header_nav_item-3 ">
          <ul>
            <li>Login</li>
            <li className="header_nav_item-3-button">Get Started</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
