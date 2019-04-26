import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

function BeerForm(props){
  let _nameHere = null;
  let _alcoholByVolume = null;
  let _intnlBitterUnit = null;
  let _companyName = null;

  function handleNewBeerSubmission(event){
    event.preventDefault();
    props.onNewBeerFormSubmission({name: _nameHere.value, abv: _alcoholByVolume.value, ibu: _intnlBitterUnit.value, company: _companyName.value, timeOpen: new Moment()});
    _nameHere.value = ' ';
    _alcoholByVolume.value = ' ';
    _intnlBitterUnit.value = ' ';
  }
  return(
    <div>
      <form onSubmit={handleNewBeerSubmission}>
        <div>
          <h2>Name: </h2>
          <input type="text" id="nameHere" ref={(input) => {_nameHere = input;}}/>
          <h2>ABV: </h2>
          <input type="text" id="alcoholByVolume" ref={(input) => {_alcoholByVolume = input;}}/>
          <h2>IBU: </h2>
            <input type="text" id="intnlBitterUnit" ref={(input) => {_intnlBitterUnit = input;}}/>
          <h2>Company: </h2>
          <input type="text" id="companyNameHere" ref={(input) => {_companyName = input;}}/>
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
BeerForm.propTypes = {
  onNewBeerFormSubmission: PropTypes.func
};

export default BeerForm;
