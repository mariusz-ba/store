import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import About from './containers/About';
import Home from './containers/Home';

import Navbar from './components/navbar';

export default () => {
  return (
    <Router>
      <main>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </main>
    </Router>
  )
}