import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './pages/Login'
import List from './pages/List'
import Register from './pages/Register'

function PrivateRoute({ component: Component, ...rest}){

    const { isAuthenticate } = useSelector(state => state.auth)

    return(
        <Route {...rest} render={props => (
            isAuthenticate ? (<Component {...props}/>) : (<Redirect to={ {pathname: '/', state: { from: props.location } }}/>)
        )}/>
    )
}

function Routes(){ 
    return(
      
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/cadastro" component={Register}/>
                <PrivateRoute path="/catalogo" component={List}/>
                <Route path="/" exact component={Login}/>
            </Switch>
        </BrowserRouter>
      
    )
}

export default Routes