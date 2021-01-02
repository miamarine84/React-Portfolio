import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import HomePage from '../src/containers/HomePage/HomePage';
import Projects from '../src/containers/Projects/Projects';
import AboutMe from '../src/containers/AboutMe/AboutMe';
import ContactMe from '../src/containers/ContactMe/ContactMe';


const PublicRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/projects" component={Projects} />
            <Route exact={true} path="/aboutme" component={AboutMe} />
            <Route exact={true} path="/contactme" component={ContactMe} />
            <Redirect to="/home" />
        </Switch>
        </Router>
}
export default PublicRoutes;