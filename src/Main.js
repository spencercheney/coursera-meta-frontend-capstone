import { Route, Routes } from "react-router-dom"
import BookingPage from "./booking/BookingPage"
import HomePage from "./homepage/HomePage"
import "./styles/Main.css"

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
      </Routes>
    </main>
  )
}