import Button from "../../Button"
import "../../styles/Highlights.css"
import Special from "./Special"
import salad from "../../images/greek salad.jpg"
import bruchetta from "../../images/bruchetta.svg"
import dessert from "../../images/lemon dessert.jpg"

export default function Highlights() {
  return (
    <article className="highlights">
      <section>
        <h1>This weeks specials!</h1>
        <Button onClick={() => console.log("test")}>Online Menu</Button>
        <div>
          <Special image={salad} name={"Greek Salad"} price={12.99}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Special>
          <Special image={bruchetta} name={"Bruchetta"} price={5.99}>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</Special>
          <Special image={dessert} name={"Lemon Dessert"} price={5}>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</Special>
        </div>
      </section>
    </article>
  )
}