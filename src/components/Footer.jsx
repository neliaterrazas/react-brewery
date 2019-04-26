import React from 'react';

import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg';

function Footer(){
  return(

    <div>
    <style jsx>{`
      .first-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #464646;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .bottom {
        background-color: darkgrey;
        height: 10vh;
        margin-top: 0;
        padding-top: 0;
      }

      `}</style>
      <div className="first-row">
        <div>
        <img src={logo}/>
        </div>
        <div>
          <h3>SOCIAL MEDIA</h3>
        </div>
        <div>
          <h3>LOCATIONS</h3>
        </div>
        <div>
          <h3>MORE BREAKSIDE</h3>
        </div>
        <div>
          <h3>GET OUR NEWSLETTER</h3>
        </div>
      </div>
      <div className="bottom">
        <h3>Breakside Brewery</h3>
      </div>
    </div>

  );
}

export default Footer;
