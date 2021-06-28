import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import LoginScreen from '../pages/login';
import ContainerComp from '../components/container/aplicaciones-container/container.comp';



const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch> 
                    <Route exact path="/login" component={ LoginScreen } />
                    
                    <Route path="/" component={ ContainerComp } />
                </Switch>
            </div>
        </Router>
    )
};

export default AppRouter;