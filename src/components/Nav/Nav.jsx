import logoImage from "../../assets/logo.png";
import "../../styles/components/nav.scss";

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="navigation_wrapper">
        <div className="navigation_logo">
          <div className="navigation_logo_wrapper">
            <figure className="navigation_logo_media">
              <img
                src={logoImage}
                alt="Logo of Raft"
                className="navigation_logo_media_image"
              />
            </figure>
            <p className="navigation_logo_text">Raft</p>
          </div>
        </div>
        <div className="navigation_info">
          <div className="naviagtion_info_wrapper">
            <ul className="navigation_info_items">
              <li className="navigation_info_item">Solutions</li>
              <li className="navigation_info_item">Learn</li>
              <li className="navigation_info_item">About</li>
            </ul>
          </div>
        </div>
        <div className="navigation_account-actions">
          <div className="navigation_account-actions_wrapper">
            <ul className="navigation_account-actions_items">
              <li className="navigation_account-actions_item">Login</li>
              <li className="navigation_account-actions_item--button">
                Get Started
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
