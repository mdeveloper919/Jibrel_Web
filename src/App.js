import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import NavBar from './components/navBar/main'
import MainView from './components/mainView/mainView';
import WhiteView from './components/whitePaper/whitePaper';
import RoadMap from './components/roadMap/roadMap';
import FAQ from './components/faq/faq';
import About from './components/about/about';
import PocaWallet from './components/pocaWallet/pocaWallet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={MainView}/>
              <Route path="/whitePaper" component={WhiteView}/>
              <Route path="/roadMap" component={RoadMap}/>
              <Route path="/faq" component={FAQ}/>
              <Route path="/about" component={About}/>
              <Route path="/pocaWallet" component={PocaWallet}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
