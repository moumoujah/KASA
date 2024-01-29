import './Logement.css';
import React from 'react';
import Header from '../../layout/header/Header.jsx';
import Footer from '../../layout/footer/Footer.jsx';
import {  useParams } from "react-router-dom";
import { getLogementById } from '../../services/logements'
import { useState } from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import starActive from "../../assets/star-active.png";
import starInactive from "../../assets/star_inactive.png";
import Slideshow from "../../components/slideshow/Slideshow.jsx";

function Logement({}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null)
  useEffect(() => {
    const searchLogement = getLogementById(id)
    if (searchLogement) {
      setLogement(searchLogement)
    } else {
      return navigate('*')
    }
    
  },[id]);
  
  
    return (
      
      <div className='Home'> 
        <div className='Main'>
        <Header />
        
          {logement && (
      <div  key={logement.id} className='containerLogements'>
        <Slideshow
         pictures={logement.pictures}
        />
      <section className='title-host-Logements'>
      <div>
      <h2> {logement.title}</h2> 
      <h4>{logement.location}</h4>
     <div className='containerTagLogement'>
      {logement.tags.map(tag => (<div className='tagLogement' key={tag}>{tag}</div>))}
     </div>
      </div>
      <div>
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt="" />
        
      </div>
      </section>
      

      </div>
)}
       
      </div>
        <Footer />
    </div>)
}

export default Logement
