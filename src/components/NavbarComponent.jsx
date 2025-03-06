import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';


const NavbarComponent = () => {

    const [active, setActive] = useState('Home');

    const navigate = useNavigate();

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

    const [search, setSearch] = useState('');

    const handleSearch = () =>{
        if (search){
            navigate(`/category/${search}`)
            setSearch('');
        }
    }

  return (

<div className="navbar">
  <div className="navbar__logo">
  <h6>{formattedDate} e-Paper</h6>
  </div>

  <div className="navbar__title">
    <h1 onClick={()=> {setActive("Home"); navigate("/")}}>Headlines <span>Now</span></h1>
  </div>

  <div className="navbar__links">
          <p className={active === 'Home' ? 'active navbar__link' : 'navbar__link'} onClick={()=> {setActive("Home"); navigate("/")}} >Home</p>
                <p className={active === 'General' ? 'active navbar__link' : 'navbar__link'} onClick={()=> {setActive("General"); navigate("/category/general")}}>General</p>
                <p className={active === 'Technology' ? 'active navbar__link' : 'navbar__link'} onClick={()=> {setActive("Technology"); navigate("/category/technology")}}>Technology</p>
                <p className={active === 'Politics' ? 'active navbar__link' : 'navbar__link'} onClick={()=> {setActive("Politics"); navigate('/category/politics')}}>Politics</p>
                <p className={active === 'Health' ? 'active navbar__link' : 'navbar__link'} onClick={()=> {setActive("Health"); navigate("/category/health")}}>Health</p>
                <p className={active === 'Art & Culture' ? 'active navbar__link' : 'navbar__link'} onClick={()=> {setActive("Art & Culture"); navigate("/category/art&culture")}}>Art & Culture</p>
  </div>

  <div className="navbar__search">
    <input className='search-input' type="text" placeholder="Search" onChange={(e)=> setSearch(e.target.value)} value={search} />
     <IoSearch className='search-icon' onClick={()=> handleSearch()} />
  </div>
</div>

  )
}

export default NavbarComponent