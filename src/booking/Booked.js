import restaruant from "../images/restaurant.jpg"
import chef from "../images/restaurant chef B.jpg"
import food from "../images/restauranfood.jpg"
import "../styles/Booked.css"

export default function Booked() {
  return (
    <>
      <article className="bookedText">
        <section>
          <h1>Reserved</h1>
          <p>Your booking has now been reserved</p>
        </section>
      </article>
      <article className="bookingPage">
        <section>
          <div>
            <img src={restaruant} alt="restaruant"/>
            <img src={chef} alt="chef making food"/>
            <img src={food} alt="food served at the Little Lemon"/>
          </div>
        </section>
      </article>
    </>
  )
}