import React, { useState } from "react";
import { IoSearch, IoMenu } from "react-icons/io5";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const handleSearch = () => {
    if (search) {
      navigate(`/category/${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2 onClick={() => { setActive("Home"); navigate("/"); }}>SB News</h2>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="navbar__menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <IoMenu />
      </div>

      {/* Navigation Links */}
      <div className={`navbar__links ${menuOpen ? "open" : ""}`}>
        {["Home", "General", "Technology", "Politics", "Health", "Art & Culture"].map((item) => (
          <p key={item} className={active === item ? "active" : ""}
             onClick={() => { setActive(item); navigate(`/category/${item.toLowerCase().replace(" & ", "&")}`); }}>
            {item}
          </p>
        ))}
      </div>

      {/* Search Bar */}
      <div className="navbar__search">
        <input className="search-input" type="text" placeholder="Search"
               onChange={(e) => setSearch(e.target.value)} value={search} />
        <IoSearch className="search-icon" onClick={handleSearch} />
      </div>
    </nav>
  );
};

export default NavbarComponent;
