import Hero from "./content/Hero"
import Highlights from "./content/highlights/Highlights"
import Testimonials from "./content/testimonials/Testimonials"
import About from "./content/About"
import "./styles/Main.css"

export default function Main() {
  return (
    <main>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </main>
  )
}