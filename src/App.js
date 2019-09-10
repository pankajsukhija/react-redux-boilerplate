import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
import Home from './components/Home'
import NotFoundPage from './components/404'
import TemplateReduxHooks from './components/TemplateReduxHooks';


export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/redux" component={TemplateReduxHooks} />
                    {// A <Switch> renders the first child <Route> that matches.
                    // A <Route> with no path always matches.
                    }
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </>
    );
}