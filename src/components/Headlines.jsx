import React, { useEffect, useState } from 'react'
import '../styles/Headlines.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import { Spinner } from 'react-bootstrap';

const Headlines = () => {

  const navigate = useNavigate();

  const {topHeadlines} = React.useContext(GeneralContext)


  return (
    <div className="top-stories-container">

      <h3>Top Headlines</h3>

      {topHeadlines && topHeadlines.length > 0 ? 
      
      <div className="top-stories">

            {topHeadlines.map((article, index) => {
                return (
                    <div className="top-story" key={index} onClick={()=> window.open(article.url, '_blank')} >
                        <img src={article.urlToImage} alt="placeholder" />
                        <p title={article.description}>{article.description?.slice(0,100)}...</p>
                    </div>
                )
            }

            )}
          
      </div>

       :
       <div className="spinners">
         <Spinner animation="grow" size="sm" />
         <Spinner animation="grow" size="sm" />
         <Spinner animation="grow" size="sm" />
       </div>}

    </div>
  )
}

export default Headlines