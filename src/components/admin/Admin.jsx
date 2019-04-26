import React from 'react';
import BeerForm from './BeerForm';
import PropTypes from 'prop-types';
import CurrentTapList from './CurrentTapList';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exampleDay: ' ',
      exampleLocation: ' ',
      exampleHours: ' '

    };

   this.handleFormSubmission = this.handleFormSubmission.bind(this);


  }

  handleFormSubmission(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    console.log(this.props.onNewLocationCreation)
    console.log(this.props.test)
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewLocationForm onNewLocationCreation={this.props.onNewLocationCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onFormSubmission={this.handleFormSubmission}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

Admin.propTypes = {
  onNewLocationCreation: PropTypes.func
};



export default Admin;
