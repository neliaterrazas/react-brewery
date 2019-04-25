import React from "react";
import Header from './Header';
import Home from './Home';
import Equis from './Equis';
import { Switch, Route, Link } from 'react-router-dom';
import Error from './Error';
import Footer from './Footer';
import Moment from 'moment';
import Admin from './Admin';
import TapList from './TapList';


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
          <Route exact path ='/equis' component={Equis} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
