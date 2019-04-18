import React from 'react';
import Equis from './Equis';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';

function Header(){
  const header = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  zIndex: '2',
  backgroundColor: 'black',
  padding: '20px 20px 20px 20px',
  top: '0px',
  left: '0px',
  width: '97vw',
  opacity: '.6'
  }
  const links = {
  opacity: '1',
  color: 'white',
  textDecoration: 'none',
  paddingRight: '10px',
  fontWeight: 'bold',
  }

  return(
    <div style={header}>
      <Link style={links} to="/">Home</Link>
      <div>
        <Link style={links} to="/Equis">Equis</Link>
      </div>
    </div>
  );
}

export default Header;
