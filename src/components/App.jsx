import React from "react";
import Header from './Header';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';
import Error from './Error';
import Footer from './Footer';
import Moment from 'moment';
import Admin from '../components/admin/Admin';
import CurrentTapList from '../components/admin/CurrentTapList';
import BeerForm from '../components/admin/BeerForm';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
