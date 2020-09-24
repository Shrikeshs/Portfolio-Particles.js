import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Education from './Education';
const Router = () => (

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/project" component={Projects} />
            <Route exact path="/edu" component={Education} />
            <Route exact path="/about" component={About} />
            

        </Switch>
    );

export default Router;