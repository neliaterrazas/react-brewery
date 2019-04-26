import React from 'react';
import PropTypes from 'prop-types';

function BeerBox(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <h3>{props.abv}</h3>
      <h3>{props.ibu}</h3>
      <h3>{props.company}</h3>
    </div>
  );
}

BeerBox.propTypes = {
  name: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default BeerBox;
