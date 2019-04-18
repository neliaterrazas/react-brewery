import React from "react";
import Header from './Header';
import Home from './Home';
import Equis from './Equis';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path ='/equis' component={Equis} />
      </Switch>
    </div>

  );

}

export default App;
