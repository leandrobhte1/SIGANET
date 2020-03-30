import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'

import Messages from '../common/msg/messages'

import Routes from './routes'

export default props => (
    <div className="wrapper">
        <Header></Header>
        <SideBar></SideBar>
        <div className="content-wrapper">
            <Routes></Routes>
        </div>
        <Footer></Footer>
        <Messages></Messages>
    </div>
)