import React from "react";
import Header from './Header';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';
import Error from './Error';
import Footer from './Footer';
import Moment from 'moment';
import BeerControl from '../components/updateTaplist/BeerControl';

import BeerForm from '../components/updateTaplist/BeerForm';
import AreYouSure from '../components/updateTaplist/AreYouSure';
import UpdateBeer from '../components/updateTaplist/UpdateBeer';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedBeer: null
    };
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);
    this.handleChangingSelectedBeer = this.handleChangingSelectedBeer.bind(this);
  }

  handleAddingNewBeer(newBeer){
    let updatedBeer = this.state.fixedBeer.slice();
    updatedBeer.push(newBeer);
    this.setState({fixedBeer: updatedBeer});
  }
  handleChangingSelectedBeer(beer){
    this.setState({selectedBeer:beer});
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path ='/' render={() =><BeerMenu fixedBeer={this.state.fixedBeer} />} />
          <Route exact path = '/beercontrol'render={() =><BeerControl  onNewBeerFormSubmission={this.handleAddingNewBeer}/>} />
          <Route exact path ='/admin' component={UpdateBeer} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
