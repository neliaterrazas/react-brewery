import React from 'react';
import PropTypes from 'prop-types';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };

  }
  render(){
    return (
      <div>
      </div>
    );
  }
}
Admin.propTypes = {
  onNewBeerFormSubmission: PropTypes.func
};
export default Admin;
