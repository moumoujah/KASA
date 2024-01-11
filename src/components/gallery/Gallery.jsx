import { getAllLogements, getLogementById } from '../../services/logements'
import Card from '../card/Card'
import './gallery.css'
import { Link } from "react-router-dom";
function gallery() {
    const logements = getAllLogements();
   
    return (
        
        <Link to="/logement" className='containerCard'>
       {logements.map(e =>{
     return (
        <div className='card'>
        <img src={e.cover} alt="" />
        <div className='overlayCard'>
        <h6 key={e.id}> {e.title}</h6>
        </div>
        </div>
    )
})}
    
     
       
    </Link>)
    
}


export default gallery





