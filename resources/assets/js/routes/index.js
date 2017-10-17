import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from '../containers/App'
import Home from '../containers/Home'
import User from '../containers/User'
import Register from '../containers/Register'
import Product from '../containers/Product'
import Login from '../containers/Login'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="user" component={User} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="product(/:slug)(/edit)" component={Product} />
    </Route>
)

export default routes