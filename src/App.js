import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react'
import HomeComp from './components/HomeComp'
import NavbarComp from './components/NavbarComp';
import AboutComp from './components/AboutComp'
import ContactComp from './components/ContactComp'
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import NotFoundComp from './components/NotFoundComp';

function App() {
    return ( 
        <Router>
            <div className = "App" >
                <NavbarComp />
                    <Switch>
                        <Route exact path="/" component={HomeComp} />
                        <Route exact path="/About" component={AboutComp} />
                        <Route exact path="/contact" component={ContactComp} />
                        <Route component={NotFoundComp} />
                    </Switch>
            </div>
        </Router>
    );
}

export default App;