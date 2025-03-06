import React, { useEffect, useState } from 'react'
import '../styles/Hero.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import Spinner from 'react-bootstrap/Spinner';

const Hero = () => {

  const {topNews} = React.useContext(GeneralContext)

  



  return (
    <>
       {topNews.length > 0 ?
<div className='Hero-container'>
       <h3>popular news</h3> <br/>
      <div className="grid-container">
     
    <div className="large-item" onClick={()=> window.open(topNews[1].url, '_blank')}>
        <img src={topNews[1].urlToImage} alt="Large Image" />
        <p className="text">T{topNews[1].description.slice(0,100)}</p>
    </div>
    <div className="medium-item" onClick={()=> window.open(topNews[2].url, '_blank')}>
        <img src={topNews[2].urlToImage} alt="Medium Image 1" />
        <p className="text">{topNews[2].description.slice(0,100)}</p>
    </div>
    <div className="medium-item" onClick={()=> window.open(topNews[3].url, '_blank')}>
        <img src={topNews[3].urlToImage} alt="Medium Image 2" />
        <p className="text">{topNews[2].description.slice(0,100)}</p>
    </div>
    <div className="medium-item" onClick={()=> window.open(topNews[4].url, '_blank')}>
        <img src={topNews[4].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[2].description.slice(0,100)}</p>
    </div>
    <div className="medium-item" onClick={()=> window.open(topNews[5].url, '_blank')}>
        <img src={topNews[5].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[5].description.slice(0,100)}</p>
    </div>
    <div className="medium-item" onClick={()=> window.open(topNews[6].url, '_blank')}>
        <img src={topNews[6].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[6].description.slice(0,100)}</p>
    </div>
    <div className="medium-item" onClick={()=> window.open(topNews[7].url, '_blank')}>
        <img src={topNews[7].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[7].description.slice(0,100)}</p>
    </div>
    <div className="medium-item" onClick={()=> window.open(topNews[8].url, '_blank')}>
        <img src={topNews[8].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[8].description.slice(0,100)}</p>
    </div>
     <div className="medium-item" onClick={()=> window.open(topNews[9].url, '_blank')}>
        <img src={topNews[9].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[9].description.slice(0,100)}</p>
    </div>
     <div className="medium-item" onClick={()=> window.open(topNews[10].url, '_blank')}>
        <img src={topNews[10].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[10].description.slice(0,100)}</p>
    </div>
     <div className="medium-item" onClick={()=> window.open(topNews[11].url, '_blank')}>
        <img src={topNews[11].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[11].description.slice(0,100)}</p>
    </div>
     <div className="medium-item" onClick={()=> window.open(topNews[12].url, '_blank')}>
        <img src={topNews[12].urlToImage} alt="Medium Image 3" />
        <p className="text">{topNews[12].description.slice(0,100)}...</p>
    </div>
</div>
</div>
        :

          <div className="spinners">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
          </div>
        
        }
    </>


  )
}

export default Hero