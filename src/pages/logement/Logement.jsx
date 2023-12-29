import './Logement.css';
import React from 'react';
import Header from '../../layout/header/Header.jsx';
import Footer from '../../layout/footer/Footer.jsx';

function Logement() {
    return (
    <div className='Home'> 
        <Header />
        <section className='section_error'>
        <div className='chiffre'>404</div>
        <div className='oups'>Oups! La page que vous demandez n'existe pas.</div>
        <div><a href="">Retourner sur la page d'accueil</a></div>
        </section>
        <Footer />
    </div>)
}

export default Logement