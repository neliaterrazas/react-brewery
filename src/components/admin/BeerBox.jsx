import React from 'react';
import PropTypes from 'prop-types';

function BeerBox(props){
  return(
    <div>
      <h3></h3>
      <h3></h3>

      <h3></h3>
      <h3></h3>
    </div>
  );
}

BeerDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default BeerBox;
