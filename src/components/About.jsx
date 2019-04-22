import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import kids from '../assets/imgs/kids.png';

function About(){
  return(
    <div className="parent">
    <style jsx>{`
      .parent {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
      }
      .photo {
        width: 100%;
      }
      .text {
        width: 100%;
      }
      `}</style>
      <div>
        <img className="photo" src={kids}/>
      </div>
      <div className="text">
        <h1>BREAKSIDE BREWERY</h1>
        <p>Breakside Brewery opened in 2010 in Northeast Portland as a restaurant and pub brewery. The brewery is known for its innovative, experimental and diverse beers. In 2013, Breakside expanded operations to Milwaukie, OR with a 30 bbl production brewery filled with 30, 60 and 120 barrel tanks, barrel rooms for wild and non-wild/sour fermentations, a high-speed bottling line and a 24-tap tasting room. The brewery expanded to Northern California in 2016 and in 2017 Breakside opened its third location in the Slabtown district of Northwest Portland. In addition to winning several national and regional awards for its beers, Breakside was named Brewery of the Year at the 2017 Oregon Beer Awards and the 2017 Best of Craft Beer Awards. Breakside sells on draft and in 22oz bottles in Oregon, Washington, Hawaii, Arizona, Colorado, Idaho, North Carolina, South Carolina, Northern California, British Columbia and Alberta.</p>
      </div>
    </div>

  );
}

export default About;
