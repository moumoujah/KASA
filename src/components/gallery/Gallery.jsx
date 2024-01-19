import { getAllLogements } from '../../services/logements'
import Card from '../card/Card'
import './gallery.css'

function gallery() {
    const logements = getAllLogements();
   
    return (
        
        <div className='containerCard'>
       {logements && logements.map(e =>{
     return (
        <Card
        id={e.id}
        key={e.id}
        title={e.title}
        cover={e.cover}
    />
        
    )
})}
    
     
       
    </div>)
    
}


export default gallery





