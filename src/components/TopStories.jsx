import React from "react";
import "../styles/TopStories.css";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import { Spinner } from "react-bootstrap";

const TopStories = () => {
  const navigate = useNavigate();
  const { topNews } = React.useContext(GeneralContext);

  // Placeholder image for missing articles
  const placeholderImage =
    "https://via.placeholder.com/150?text=No+Image+Available";

  return (
    <div className="top-stories-container">
      <h3>🔥 Top Stories</h3>

      {topNews && topNews.length > 6 ? (
        <div className="top-stories">
          {topNews.slice(6, 16).map((article, index) => (
            <div
              className="top-story"
              key={index}
              onClick={() => window.open(article.url, "_blank")}
            >
              <img
                src={article.urlToImage || placeholderImage}
                alt="News"
                loading="lazy"
              />
              <p>{article.title.length > 40 ? article.title.slice(0, 40) + "..." : article.title}</p>
            </div>
          ))}

          <button onClick={() => navigate("/category/trending")}>
            View More
          </button>
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
};

export default TopStories;
