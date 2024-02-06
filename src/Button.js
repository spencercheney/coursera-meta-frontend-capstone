import "./styles/Button.css"

export default function Button({children, onClick, isDisabled}) {

  function click() {
    if(!isDisabled) {
      onClick()
    }
  }

  return (
    <button className={isDisabled ? "btn disabled" : "btn"} onClick={click}>
      {children}
    </button>
  )
}