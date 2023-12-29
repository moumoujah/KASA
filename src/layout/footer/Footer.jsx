import './footer.css';
import LogoKasaFooter from "../../assets/DESK_LOGO_FOOTER.png";

function Footer() {
    return (
    <footer>
        <img src={LogoKasaFooter} alt='Logo Kasa'/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>)
}

export default Footer