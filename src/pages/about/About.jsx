import React from 'react';
import './About.css';
import Header from '../../layout/header/Header.jsx';
import ImgSect from "../../assets/About.png" ;
import Footer from '../../layout/footer/Footer.jsx';
import { getAllDescription } from '../../services/about.js'
import Collapse  from '../../components/collapse/Collapse.jsx'

function About() {
  const About = getAllDescription();
    
    return (
    <div className='Home'> 
      <div className='Main'>
        <Header />
        <section className='Hero'>
         <img src={ImgSect} alt='Images'/>
         

        </section>
        <section className='sectionCollapse'>
        {About && About.map(e =>{
     return (
      
        <Collapse
        id={e.id}
        key={e.id}
        title={e.title}
        content={e.content}
    />
    
        
    )
})}</section>
       
      </div>
        <Footer />
    </div>)
}

export default About