import "../styles/HomePage.css"
import Hero from "./Hero"
import Highlights from "./highlights/Highlights"
import Testimonials from "./testimonials/Testimonials"
import About from "./About"

export default function HomePage() {
  return (
    <div className="homePage">
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </div>
  )
}