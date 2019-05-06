import React from 'react';
import PropTypes from 'prop-types';
import BeerBox from './BeerBox';

function BeerMenu(props){
  return(
    <div className="grid-container">
    <style jsx>{`
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: ". . . ." ". . . ." ". . . .";
}
      `}</style>
      {props.fixedBeer.map((beer, index) =>
        <BeerBox name={beer.name}
        abv={beer.abv}
        ibu={beer.ibu}
        company={beer.company}
        key={index}/>
      )}
    </div>
  );
}

BeerMenu.propTypes = {
  
  FixedBeer: PropTypes.array
};

export default BeerMenu;
