import "./styles/Footer.css"
import logo from "./images/logo vertical.png"

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="vertical logo"/>
        <div>
          <label>Doormat Navigation</label>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Menu</a>
            </li>
            <li>
              <a href="/#">Reservations</a>
            </li>
            <li>
              <a href="/#">Order Online</a>
            </li>
            <li>
              <a href="/#">Login</a>
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