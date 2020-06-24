import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import Home from './views/home'
import Notfound from './views/notFound';


const Routes = () => (
    <HelmetProvider>
         <Helmet>
        <title>{`${process.env.APP_NAME}`}</title>
        <link rel="canonical" href={`${process.env.APP_URL}`} />
      </Helmet>
        <main>
            <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="*" component={Notfound}/>
                    </Switch>
            </Router>
        </main>
    </HelmetProvider>
);

export default Routes;
