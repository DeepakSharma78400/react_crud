import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react'
import HomeComp from './components/HomeComp'
import NavbarComp from './components/NavbarComp';
import AboutComp from './components/AboutComp'
import ContactComp from './components/ContactComp'
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import NotFoundComp from './components/NotFoundComp';
import ListCategoryComp from './components/ListCategoryComp';
import AddCategoryComp from './components/AddCategoryComp';
import EditCategoryComp from './components/EditCategory';
import ViewCategoryComp from './components/ViewCategoryComp';

function App() {
    return ( 
        <Router>
            <div className = "App" >
                <NavbarComp />
                    <Switch>
                        <Route exact path="/" component={HomeComp} />
                        <Route exact path="/About" component={AboutComp} />
                        <Route exact path="/Contact" component={ContactComp} />
                        <Route exact path="/Category" component={ListCategoryComp} />
                        <Route exact path="/Category/Add" component={AddCategoryComp} />
                        <Route exact path="/Category/Edit" component={EditCategoryComp} />
                        <Route exact path="/Category/View" component={ViewCategoryComp} />
                        
                        <Route component={NotFoundComp} />
                    </Switch>
            </div>
        </Router>
    );
}

export default App;