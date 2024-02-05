import "../../styles/Special.css"
import delivery from "../../images/delivery.PNG"

export default function Special({children, image, name, price}) {

  /**
   * formats the num to be display properly as a price
   * @param {number} num
   * @returns string with correct formatting
   */
  function toPrice(num) {
    var string = num.toString()
    var decimalIndex = string.indexOf(".")
    if(decimalIndex == -1) {
      string += ".00"
    } else if(decimalIndex != string.length - 3) {
      string += "0"
    }
    return "$" + string
  }

  return (
    <div className="specials">
      <img src={image}/>
      <div>
        <span className="title">{name}</span>
        <span className="price">{toPrice(price)}</span>
        <div>{children}</div>
        <a>
          Order a Delivery
          <img src={delivery}/>
        </a>
      </div>
    </div>
  )
}