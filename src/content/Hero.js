import "../styles/Hero.css"
import food from "../images/restauranfood.jpg"
import Button from "../Button"

export default function Hero() {
  return (
    <article className="hero">
      <section>
        <span>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. 
          </p>
          <Button onClick={() => console.log("test")}>Reserve a Table</Button>
        </span>
        <div>
          <img src={food} alt="some of the food served at the Little Lemon"></img>
        </div>
      </section>
    </article>
  )
}