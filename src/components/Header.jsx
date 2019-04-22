import React from 'react';
import Equis from './Equis';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';

function Header(){
  const header = {
  display: 'flex',
  backgroundImage: 'linear-gradient(rgba(44,62,80,1), rgba(44,62,80,0))',
  flexDirection: 'row',
  justifyContent: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: '2',
  padding: '20px 20px 20px 20px',
  top: '0px',
  left: '0px',
  width: '97vw',
  opacity: '.8',

  }
  const links = {
  opacity: '1',
  color: 'black',
  textDecoration: 'none',
  paddingRight: '10px',
  fontWeight: 'bold',
  }

  return(
    <div style={header}>
      <Link style={links} to="/">BREAKSIDE</Link>
      <div>
        <Link style={links} to="/Equis">(hamburger)</Link>
      </div>
    </div>
  );
}

export default Header;
