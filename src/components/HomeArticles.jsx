import React, { useContext } from "react";
import "../styles/HomeArticles.css";
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const HomeArticles = () => {
  const navigate = useNavigate();
  const { businessNews, technologyNews, politicsNews } =
    useContext(GeneralContext);

  // Placeholder image if URL is missing
  const placeholderImage =
    "https://via.placeholder.com/400?text=No+Image+Available";

  // Function to render news sections dynamically
  const renderNewsSection = (title, category, newsData) => (
    <div className="home-articles-body">
      <div className="home-articles-head">
        <h2>{title}</h2>
        <p onClick={() => navigate(`/category/${category}`)}>View all</p>
      </div>

      {newsData.length > 0 ? (
        <div className="home-articles">
          {newsData.slice(0, 3).map((news, index) => (
            <div
              key={index}
              className="home-article"
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
      ) : (
        <div className="spinners">
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      )}
    </div>
  );

  return (
    <div className="home-articles-container">
      {renderNewsSection("Business", "business", businessNews)}
      {renderNewsSection("Technology", "technology", technologyNews)}
      {renderNewsSection("Politics", "politics", politicsNews)}
    </div>
  );
};

export default HomeArticles;
