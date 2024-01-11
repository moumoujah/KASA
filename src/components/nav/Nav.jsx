import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
    <nav className='NavHeader'>
        <ul>
            <NavLink to ='/' end  className={({ isActive }) =>isActive ? "active" : ""}> Accueil</NavLink>
            <NavLink to ='/about' className={({ isActive }) =>isActive ? "active" : ""}> A Propos</NavLink>
        </ul>
       
</nav>)
}

export default Nav