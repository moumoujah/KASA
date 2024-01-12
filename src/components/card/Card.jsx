import './card.css'
import { Link } from "react-router-dom";

function Card({ title, cover, key }) {
  return (
    <Link to={`/logement${key}`} className='card'>
          <img src={cover} alt="Pictur" />
        <div className='overlayCard'>
        <h6> {title}</h6>
        </div>
    </Link>
  )
}

export default Card