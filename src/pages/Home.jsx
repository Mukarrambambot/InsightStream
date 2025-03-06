import React from 'react'
import '../styles/Home.css'
import Hero from '../components/Hero'
import Headlines from '../components/Headlines'
import TopStories from '../components/TopStories'
import HomeArticles from '../components/HomeArticles'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className="Home">
    <div className="home-components">
       <Headlines/>
        <Hero />
      </div>
      <div className="home-components">
          <TopStories />
          <HomeArticles />
      </div>

      <NewsLetter />

    </div>
  )
}

export default Home