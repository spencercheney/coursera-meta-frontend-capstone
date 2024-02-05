import "./styles/Footer.css"
import logo from "./images/logo vertical.png"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="vertical logo"/>
        <div>
          <label>Doormat Navigation</label>
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
        </div>
        <div>
          <label>Contact</label>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <label>Social Media Links</label>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}