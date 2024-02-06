import { Route, Routes } from "react-router-dom"
import BookingPage from "./booking/BookingPage"
import HomePage from "./homepage/HomePage"
import "./styles/Main.css"
import { useReducer } from "react"
import Booked from "./booking/Booked"

function initializeTimes() {
  return ["5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm"]
}

function  updateTimes(state, action) {
  return state
}

export default function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}/>
        <Route path="/booked" element={<Booked/>}/>
      </Routes>
    </main>
  )
}

export {initializeTimes, updateTimes}