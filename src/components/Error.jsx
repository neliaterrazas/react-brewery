import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Router, Link } from 'react-router-dom';


function Error(props){
  return(
    <div>
      <h1>The page {props.location.pathname} does not exsist.</h1>
      <h2>Would you like to return <Link to='/'>home</Link>instead?</h2>
    </div>
  );
}
Error.propTypes = {
  location: PropTypes.object
};

export default Error;
