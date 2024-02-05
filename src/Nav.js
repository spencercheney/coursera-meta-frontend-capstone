import "./styles/Nav.css"
import logo from "./images/Logo .svg"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="horizontal logo"/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="#">Order Online</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
      </ul>
    </nav>
  )
}