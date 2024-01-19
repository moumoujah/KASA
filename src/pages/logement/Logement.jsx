import './Logement.css';
import React from 'react';
import Header from '../../layout/header/Header.jsx';
import Footer from '../../layout/footer/Footer.jsx';
import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  
    return (
      <div className='Home'> 
        <div className='Main'>
        <Header />
        <section >
        <div>{id}</div>
          
        
        </section>
      </div>
        <Footer />
    </div>)
}

export default Logement
