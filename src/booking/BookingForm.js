import { useEffect, useState } from "react"
import "../styles/BookingForm.css"
import Dropdown from "./Dropdown"
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons"
import { faCalendarMinus, faUser, faClock } from "@fortawesome/free-regular-svg-icons"

export default function BookingForm() {
  const [indoorSeating, setIndoorSeating] = useState(false)
  const [outdoorSeating, setOutdoorSeating] = useState(false)

  useEffect(() => {
    if(indoorSeating) {
      setOutdoorSeating(false)
    }
  }, [indoorSeating])

  useEffect(() => {
    if(outdoorSeating) {
      setIndoorSeating(false)
    }
  }, [outdoorSeating])

  return (
    <article className="bookingForm">
      <section>
        <h1>Reservations</h1>
        <form>
          <div className="seating">
            <span>Indoor Seating</span>
            <input type="radio" checked={indoorSeating} onClick={() => setIndoorSeating(prevState => !prevState)} readOnly/>
          </div>
          <div className="seating">
            <span>Outdoor Seating</span>
            <input type="radio" checked={outdoorSeating} onClick={() => setOutdoorSeating(prevState => !prevState)} readOnly/>
          </div>
          <Dropdown label="Date" icon={faCalendarMinus} name="Select Date" options={["Birthday", "Engagement", "Anniversary"]} isDate={true}/>
          <Dropdown label="Number of Diners" icon={faUser} name="No. of Diners" options={["1 Diner", "2 Diners", "3 Diners", "4 Diners", "5 Diners", "6 Diners", "7 Diners", "8 Diners", "9 Diners", "10 Diners"]} isDate={false}/>
          <Dropdown label="Select Occasion" icon={faChampagneGlasses} name="Occasion" options={["Birthday", "Engagement", "Anniversary"]} isDate={false}/>
          <Dropdown label="Time" icon={faClock} name="Select Time" options={["Birthday", "Engagement", "Anniversary"]} isDate={false}/>
        </form>
      </section>
    </article>
  )
}