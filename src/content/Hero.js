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
          <Button>Reserve a Table</Button>
        </span>
        <div>
          <img src={food}></img>
        </div>
      </section>
    </article>
  )
}