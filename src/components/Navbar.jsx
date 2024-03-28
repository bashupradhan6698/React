import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/users">user</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
