import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
    <nav className='NavHeader'>
        <ul>
            <NavLink>Accueil</NavLink>
            <NavLink>A Propos</NavLink>
        </ul>
       
</nav>)
}

export default Nav