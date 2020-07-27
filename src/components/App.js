import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../landing/Home'
import Login from './AuthPages/Login'


import AppContent from './App/index'

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <div>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/app/content" exact component={AppContent} />
                    <Route path="/app/login" exact component={Login} /> 
                </div>
                
            </Switch>
        </BrowserRouter>
    );
}

export default App;