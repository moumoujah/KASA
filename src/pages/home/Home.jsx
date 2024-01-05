import React from 'react';
import Header from '../../layout/header/Header.jsx';
import ImgSect from "../../assets/Image.png" ;
import Footer from '../../layout/footer/Footer.jsx';

function Home() {

    
    return (
    <div className='Home'> 
      <div className='Main'>
        <Header />
        <section className='Hero'>
         <img src={ImgSect} alt='Images'/>
         <p>Chez vous, partout et ailleurs</p>
        </section>
        <section className='containerCard'>
        </section>
      </div>
        <Footer />
    </div>)
}

export default Home