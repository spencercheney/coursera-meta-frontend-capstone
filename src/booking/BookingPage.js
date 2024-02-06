import BookingForm from "./BookingForm";
import restaruant from "../images/restaurant.jpg"
import chef from "../images/restaurant chef B.jpg"
import food from "../images/restauranfood.jpg"
import Button from "../Button";
import "../styles/BookingPage.css"

export default function BookingPage() {
  return (
    <>
      <BookingForm/>
      <article className="bookingPage">
        <section>
          <div>
            <img src={restaruant} alt="restaruant"/>
            <img src={chef} alt="chef making food"/>
            <img src={food} alt="food served at the Little Lemon"/>
          </div>
          <Button>Reserve a Table</Button>
        </section>
      </article>
    </>
  )
}