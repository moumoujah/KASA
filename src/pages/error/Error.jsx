import './Error.css';
import React from 'react';
import Header from '../../layout/header/Header.jsx';
import Footer from '../../layout/footer/Footer.jsx';

function Error() {
    return (
        <div className='Home'> 
      <div className='Main'>
        <Header />
        <section className='section_error'>
        <div className='chiffre'>404</div>
        <div className='oups'>Oups! La page que vous demandez n'existe pas.</div>
        <div><a href="#">Retourner sur la page d'accueil</a></div>
        </section>
      </div>
        <Footer />
    </div>)
    
}

export default Error

