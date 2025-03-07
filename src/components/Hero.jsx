import React, { useState } from "react";
import "../styles/Hero.css";
import { GeneralContext } from "../context/GeneralContext";
import Spinner from "react-bootstrap/Spinner";

const Hero = () => {
  const { topNews } = React.useContext(GeneralContext);

  // Placeholder image for missing articles
  const placeholderImage =
    "https://via.placeholder.com/400?text=No+Image+Available";

  return (
    <>
      {topNews.length > 5 ? (
        <div className="Hero-container">
          {/* Main Featured Article */}
          <div
            className="hero-article-1"
            onClick={() => window.open(topNews[1].url, "_blank")}
          >
            <img
              src={topNews[1].urlToImage || placeholderImage}
              alt="Main News"
              loading="lazy"
            />
            <h3>{topNews[1].title}</h3>
          </div>

          {/* Small News Articles */}
          <div className="hero-article-2">
            {topNews.slice(2, 6).map((news, index) => (
              <div
                key={index}
                className="hero-article-small"
                onClick={() => window.open(news.url, "_blank")}
              >
                <img
                  src={news.urlToImage || placeholderImage}
                  alt="News"
                  loading="lazy"
                />
                <p>{news.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="spinners">
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      )}
    </>
  );
};

export default Hero;
