import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Courts from './components/pages/Courts';
import Aboutfr from './components/pages/Aboutfr';
import BrowserRouter from 'react-router-dom/BrowserRouter'


function App() {
  return (

    
    
    <Router>
      <Navbar />
      <Switch>
      <BrowserRouter basename={window.location.pathname || ''}>

      
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/courts' component={Courts} />
        <Route path='/aboutfr' component={Aboutfr} />
        </BrowserRouter>
        
      </Switch>
      </Router>
    
  );
}

export default App;
