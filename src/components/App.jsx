import React from "react";
import Header from './Header';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';
import Error from './Error';
import Footer from './Footer';
import Moment from 'moment';
import BeerControl from '../components/updateTaplist/BeerControl';
import BeerMenu from '../components/updateTaplist/BeerMenu';
import BeerForm from '../components/updateTaplist/BeerForm';
import AreYouSure from '../components/updateTaplist/AreYouSure';
import fixedBeer from './model/FixedBeerList';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      fixedBeer: fixedBeer,
    };
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);

  }

  handleAddingNewBeer(newBeer){
    let updatedBeer = this.state.fixedBeer.slice();
    updatedBeer.push(newBeer);
    this.setState({fixedBeer: updatedBeer});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path ='/' render={() =><BeerMenu fixedBeer={this.state.fixedBeer} />} />
          <Route exact path = '/beercontrol'render={() =><BeerControl  onNewBeerFormSubmission={this.handleAddingNewBeer}/>} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
