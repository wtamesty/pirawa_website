import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const Main = () => (
    <Switch>
        <Route exact path="/"           component={LandingPage} />
        <Route exact path="/aboutme"    component={AboutMe} />
        <Route exact path="/contact"    component={Contact} />
        <Route exact path="/projects"   component={Projects} />
        <Route exact path="/resume"     component={Resume} />
    </Switch>
)

export default Main;