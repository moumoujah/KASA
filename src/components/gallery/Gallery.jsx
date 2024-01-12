import { getAllLogements} from '../../services/logements'
import Card from '../card/Card'
import './gallery.css'

function gallery() {
    const logements = getAllLogements();
   
    return (
        
        <div className='containerCard'>
       {logements.map(e =>{
     return (
        <Card
        key={e.id}
        title={e.title}
        cover={e.cover}
    />
        
    )
})}
    
     
       
    </div>)
    
}


export default gallery





