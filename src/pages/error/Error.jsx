import './Error.css';
import React from 'react';
import Header from '../../layout/header/Header.jsx';
import Footer from '../../layout/footer/Footer.jsx';
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className='Home'> 
      <div className='Main'>
        <Header />
        <section className='section_error'>
        <h1 className='chiffre'>404</h1>
        <div className='errorMessage'>Oups! La page que vous demandez n'existe pas.</div>
        <Link to ="/" >Retourner sur la page d'accueil</Link>
        </section>
      </div>
        <Footer />
    </div>)
    
}

export default Error

