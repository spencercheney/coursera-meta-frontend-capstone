import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/Dropdown.css"
import { useEffect, useRef, useState } from "react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export default function Dropdown({label, icon, name, options, isDate, setter}) {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [text, setText] = useState(name)
  const [styles, setStyles] = useState({})
  const [chevronFlip, setChevronFlip] = useState(false)
  const dateRef = useRef(null)

  useEffect(() => {
    if((selectedOption === null && selectedDate === null) || showOptions) {
      setText(name)
      setStyles({
        backgroundColor: "#EDEFEE",
        color: "#495E57"
      })
      setChevronFlip(false)
    } else {
      setStyles({
        backgroundColor: "#495E57",
        color: "#FFFFFF"
      })
      setChevronFlip("vertical")
      if(isDate) {
        setText(dateToString(selectedDate))
      } else {
        setText(selectedOption)
      }
    }
  }, [selectedOption, showOptions, selectedDate, name, isDate])

  useEffect(() => {
    if(isDate) {
      setter(selectedDate)
    } else {
      setter(selectedOption)
    }
  }, [isDate, selectedDate, selectedOption, setter])

  function open(e) {
    e.preventDefault()
    setSelectedOption(null)
    if(isDate) {
      dateRef.current.showPicker()
    } else {
      setShowOptions(prevState => !prevState)
    }
  }

  function selectOption(e) {
    e.preventDefault()
    const option = e.target.innerText
    setShowOptions(false)
    setSelectedOption(option)
  }

  function selectDate(e) {
    const [year, month, day] = e.target.value.split("-")
    setSelectedDate(new Date(year, month - 1, day))
  }

  function dateToString(date) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    return weekdays[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate()
  }

  return (
    <div className="dropdown">
      <span>{label}</span>
      <button onClick={open} style={styles}>
        <FontAwesomeIcon icon={icon} className="left"/>
        {text}
        <FontAwesomeIcon icon={faChevronDown} className="right" flip={chevronFlip}/>
      </button>
      {showOptions &&
        <div className="options">
          {options.map((option, index) =>
            <button onClick={selectOption} key={index}>{option}</button>
          )}
        </div>
      }
      {isDate && <input type="date" ref={dateRef} onChange={selectDate}/>}
    </div>
  )
}