// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Events from './components/Events';
import Teachers from './components/Teachers';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/courses" component={Courses} />
          <Route path="/events" component={Events} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;