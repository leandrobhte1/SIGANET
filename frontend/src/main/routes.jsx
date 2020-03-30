import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'


import Guiche from '../guiche/guiche'
import SenhasFila from '../guiche/senhasFila'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Guiche}></Route>
        <Route path='/senhasFila' component={SenhasFila}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)