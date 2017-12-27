import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';
import Home from './Containers/Home';

class App extends Component {
  render() {
    return (
       <Router>
          <div>
             <Switch>
                <Route exact path='/' component={Home} />
             </Switch>
          </div>
       </Router>
    );
  }
}
export default App;
