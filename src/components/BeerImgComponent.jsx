import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import year from '../assets/imgs/year-round.png';
import core from '../assets/imgs/core-seasonal.png';
import ipa from '../assets/imgs/rotating-ipa.png';
import trees from '../assets/imgs/watercolor-trees.jpg';


function BeerImgComponent(){
  return(
    <div>
      <style jsx>{`
        .example {
          color: red;
        }
        .parent{
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 70vh;
          justify-content: center;
          margin-left: 25%;
          margin-right: 25%;
        }
        `}</style>
      <h1>OUR BEERS</h1>
      <div className="parent">
        <img src={year}/>
        <img src={core}/>
        <img src={ipa}/>
      </div>
      <div>
      <button type="button">ALL BEERS</button>
      </div>

      <img src={trees}/><img src={trees}/><img src={trees}/>


    </div>

  );
}

export default BeerImgComponent;
