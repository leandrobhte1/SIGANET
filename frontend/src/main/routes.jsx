import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'


import Guiche from '../guiche/guiche'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Guiche}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)