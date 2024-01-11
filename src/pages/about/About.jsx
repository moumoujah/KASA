import React from 'react';
import './About.css';
import Header from '../../layout/header/Header.jsx';
import ImgSect from "../../assets/About.png" ;
import Footer from '../../layout/footer/Footer.jsx';

function About() {

    
    return (
    <div className='Home'> 
      <div className='Main'>
        <Header />
        <section className='Hero'>
         <img src={ImgSect} alt='Images'/>
        </section>
       
      </div>
        <Footer />
    </div>)
}

export default About