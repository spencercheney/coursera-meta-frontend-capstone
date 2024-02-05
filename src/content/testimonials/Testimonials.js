import "../../styles/Testimonials.css"
import Testimony from "./Testimony"
import joseph from "../../images/joseph-gonzalez.jpg"
import albert from "../../images/albert-dera.jpg"
import jurica from "../../images/jurica-koletic.jpg"
import toa from "../../images/toa-heftiba.jpg"

export default function Testimonials() {
  return (
    <article className="testimonials">
      <section>
        <h1>Testimonials</h1>
        <div>
          <Testimony rating="4/5" name="Joseph Gonzalez" image={joseph}>So good! I love the food there</Testimony>
          <Testimony rating="5/5" name="Albert Dera" image={albert}>The restaurant offered an eclectic array of dishes, blending flavors from around the world with a modern twist</Testimony>
          <Testimony rating="3/5" name="Jurica Koletic" image={jurica}>The restaurant boasted impeccable service and a sophisticated atmosphere.</Testimony>
          <Testimony rating="4/5" name="Toa Heftiba" image={toa}>The restaurant's rustic charm and flavorful dishes created a delightful dining experience</Testimony>
        </div>
      </section>
    </article>
  )
}