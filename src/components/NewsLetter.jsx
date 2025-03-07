import React, { useState } from "react";
import "../styles/NewsLetter.css";

const NewsLetter = () => {
  const [showA, setShowA] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setEmail("");
    setError("");
    setShowA(true);
    setTimeout(() => {
      setShowA(false);
    }, 3000);
  };

  return (
    <div className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      <h4>Get a weekly digest of our top stories straight to your inbox.</h4>

      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button onClick={handleSubmit}>Subscribe</button>
      </form>

      {error && <p className="newsletter-error">{error}</p>}

      {showA && (
        <div className="newsletter-success">
          <p>🎉 Thank you for subscribing!</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      )}

      <p className="newsletter-disclaimer">
        We respect your privacy. Your email is safe with us. Read our{" "}
        <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default NewsLetter;
