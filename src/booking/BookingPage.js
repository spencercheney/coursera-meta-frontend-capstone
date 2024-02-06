import BookingForm from "./BookingForm";
import restaruant from "../images/restaurant.jpg"
import chef from "../images/restaurant chef B.jpg"
import food from "../images/restauranfood.jpg"
import Button from "../Button";
import "../styles/BookingPage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingPage({availableTimes, dispatch}) {
  const navigate = useNavigate()
  const [formIsValid, setFormIsValid] = useState(false)
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} setIsFormValid={setFormIsValid}/>
      <article className="bookingPage">
        <section>
          <div>
            <img src={restaruant} alt="restaruant"/>
            <img src={chef} alt="chef making food"/>
            <img src={food} alt="food served at the Little Lemon"/>
          </div>
          <Button isDisabled={!formIsValid} onClick={() => navigate("/booked")}>Reserve a Table</Button>
        </section>
      </article>
    </>
  )
}