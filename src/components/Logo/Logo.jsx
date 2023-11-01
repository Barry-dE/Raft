import raftLogo from "../../assets/images/import.png";
import "../Nav/nav.scss";
function Logo() {
  return (
    <div className="header_nav_item-1">
      <figure>
        <img src={raftLogo} alt="Raft logo" />
      </figure>
      <h1>Raft</h1>
    </div>
  );
}

export default Logo;
