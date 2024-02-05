import "../../styles/Testimony.css"

export default function Testimony({children, rating, image, name}) {
  return(
    <div className="testimony">
      <span>Rating - {rating}</span>
      <br/><br/>
      <div>
        <img src={image} alt={"picture of " + name}/>
        <span>{name}</span>
      </div>
      <br/>
      <p>{children}</p>
    </div>
  )
}