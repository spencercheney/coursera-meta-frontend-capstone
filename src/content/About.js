import "../styles/About.css"
import a from "../images/Mario and Adrian A.jpg"
import restaurant from "../images/restaurant.jpg"

export default function About() {
  return (
    <article className="about">
      <section>
        <div className="text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </span>
        </div>
        <div className="images">
          <img src={restaurant} alt="restaruant" className="restaruant"/>
          <img src={a} alt="the chefs" className="a"/>
        </div>
      </section>
    </article>
  )
}