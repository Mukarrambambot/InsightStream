import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const GeneralContext = React.createContext();

const GeneralContextProvider = ({children}) => {

    const [topNews, setTopNews] = useState([])
    const [topHeadlines, setHeadlines] = useState([])
    const [businessNews, setBusinessNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [politicsNews, setPoliticsNews] = useState([]);
    
    const newKey =  "6f813cf12de84ce99402864c27976d57"
    useEffect(() => { 
        fetchHeadlines()
        fetchTopNews() 
        fetchBusinessNews()
        fetchPoliticsNews()
        fetchTechnologyNews()
      }, [])
    
     const fetchHeadlines = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newKey}`);
          setHeadlines(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      
      const fetchTopNews = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=popular&apiKey=${newKey}`);
          setTopNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

      const fetchBusinessNews = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=business&apiKey=${newKey}`);
          setBusinessNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchPoliticsNews = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=politics&apiKey=${newKey}`);
          setPoliticsNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchTechnologyNews = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${newKey}`);
          setTechnologyNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

    
  return (
    <GeneralContext.Provider value={{topHeadlines, topNews, businessNews, technologyNews, politicsNews}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider