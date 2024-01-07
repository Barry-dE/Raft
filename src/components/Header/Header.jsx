import "../../styles/components/header.scss";
// Import PropTypes
import PropTypes from "prop-types";

function Header({ children }) {
  return <div className="header">{children}</div>;
}

// Define propTypes for your component
Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
