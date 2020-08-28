import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Procedures from './Procerdures'
import Contact from './Contact' 
import WidgetShow from './WidgetShow'

function App() {
  const procedures = [
    "Deep Cleaning",
    "Root Canal",
    "Wisdom Teeth Removal",
    "Grills",
    "Implants",
    "Fillings"
  ]
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Go Back to Home</Link> {' '}
        <Link to="/procedures">See our Procedures</Link>{' '}
        <Link to="/contact">Contact Us!</Link>{' '}
      </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/procedures" render={() => <Procedures procedures={procedures}/>}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures} {...props}/>} />
    </div>  
    </Router>
  );
}

export default App;
