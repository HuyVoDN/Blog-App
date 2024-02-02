import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../img/Blogging.png";
import { AuthContext } from '../context/authContext.jsx';
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        <div className="links">
          <Link className="link" to="/?categ=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?categ=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?categ=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?categ=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?categ=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?categ=food">
            <h6>FOOD</h6>
          </Link>
          {currentUser && <span>{currentUser.other.username}</span>}
          { currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="/login">Login</Link> }
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar