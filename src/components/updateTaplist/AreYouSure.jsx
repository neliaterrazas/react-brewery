import React from 'react';
import PropTypes from 'prop-types';

function AreYouSure(props){

  return(
    <div>
      <h2>Are you authorized to add a new beer?</h2>
      <button onClick={props.onFormSubmission}>Yes</button>

    </div>
  );
}

AreYouSure.propTypes = {
  onFormSubmission: PropTypes.func
};

export default AreYouSure;
