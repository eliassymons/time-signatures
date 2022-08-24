import { Link } from "react-router-dom";
import segno from "../images/segno.png";

export default function Header() {
  return (
    <header className="header">
      <h1>Time Signatures</h1>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/app" className="link">
              play
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
