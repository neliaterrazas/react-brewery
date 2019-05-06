import React from 'react';
import BeerForm from './BeerForm';
import PropTypes from 'prop-types';
import AreYouSure from './AreYouSure';

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };

    this.handleFormSubmission = this.handleFormSubmission.bind(this);
 }

  handleFormSubmission(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <BeerForm onNewBeerFormSubmission={this.props.onNewBeerFormSubmission} />;
    } else {
      currentlyVisibleContent = <AreYouSure onFormSubmission={this.handleFormSubmission}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

BeerControl.propTypes = {
  onNewBeerFormSubmission: PropTypes.func
};



export default BeerControl;
