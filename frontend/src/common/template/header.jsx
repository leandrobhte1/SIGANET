import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showSearchBar, showUserInfo  } from '../commonActions'

import { Icon } from 'semantic-ui-react'

import If from '../operator/if'

class Header extends Component{

    render() {

        let { showSearchBar, showUserInfo } = this.props

        return (
            <header className='main-header'>
                <a href='/#/' className='logo'>
                    
                    <span className='logo-mini'>
                        <svg height="30" viewBox="0 0 50 56" width="30" xmlns="http://www.w3.org/2000/svg"><g id="008---Male-Customer-Advisor" fill="none"><path id="Shape" d="m11 18v-3.01s2-11 14-11 14 11 14 11v3.01z" fill="#805333"/><path id="Shape" d="m39 24c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1c0-15.2-.064-15.679.15-16 .17-.29.49 2 .85 2 .2821782.000667.5509408.1205206.74.33.352 1.759.26 1.682.26 13.67z" fill="#a5a5a4"/><path id="Shape" d="m13 24c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1c0-11.654-.088-11.931.26-13.67.1890592-.2094794.4578218-.329333.74-.33.36 0 .68-2.29.85-2 .215.323.15.805.15 16z" fill="#a5a5a4"/><path id="Shape" d="m11 18h28c1.1045695 0 2 .8954305 2 2v6c0 1.1045695-.8954305 2-2 2h-28c-1.1045695 0-2-.8954305-2-2v-6c0-1.1045695.8954305-2 2-2z" fill="#547580"/><path id="Shape" d="m49.99 54.99c.0070495.2664925-.0943299.5244411-.28094.7148212-.1866102.19038-.4424798.2968975-.70906.2951788h-48c-.26658015.0017187-.52244979-.1047988-.70905996-.2951788-.18661018-.1903801-.28798951-.4483287-.28094004-.7148212v-3.99c.3-6.1 3.43-7 3.43-7l13.56-4h16l13.56 4s3.13.9 3.43 7z" fill="#285680"/><path id="Shape" d="m47.99 54.93c.0223712.2628169-.0611692.5236814-.2320522.7246098s-.4149489.3252712-.6779478.3453902h-44.16c-.26299893-.020119-.5070648-.1444618-.67794781-.3453902-.170883-.2009284-.25442339-.4617929-.23205219-.7246098v-4.24c.18-4.4 1.58-6.26 2.45-6.99l12.54-3.7h16l12.54 3.7c.87.73 2.27 2.59 2.45 6.99z" fill="#4482c3"/><path id="Shape" d="m33 33.23v6.77s-1 4-8 4-8-4-8-4v-6.77z" fill="#f9c795"/><path id="Shape" d="m35.264 25.93c.046 2.541.516 4.8-2.376 7.4-3.155 2.84-3.155 5.67-6.311 5.67h-3.155c-3.155 0-3.155-2.83-6.31-5.67-3.055-2.746-2.366-5.08-2.366-8.09 0-2.723-1.32-5.058-.435-8.119.4840767-1.9118779 1.4164587-3.6810042 2.72-5.161.5087715-.4852976 1.1782843-.7664859 1.881-.79 2.811-.18 10.871-.54 14.178 1.04 0 0 1.823 1.113 2.743 5.188.667 2.95-.633 5.002-.569 8.532z" fill="#fdd7ad"/><path id="Shape" d="m24 34h-10c-2.209139 0-4-1.790861-4-4v-2c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2c0 1.1045695.8954305 2 2 2h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z" fill="#a5a5a4"/><rect id="Rectangle-path" fill="#547580" height="4" rx="1" width="6" x="22" y="30"/><path id="Shape" d="m39 13v2c-.3609769-1.5990748-.986228-3.1267152-1.85-4.52-1.85-3.04-5.44-6.48-12.15-6.48s-10.3 3.44-12.15 6.48c-.863772 1.3932848-1.4890231 2.9209252-1.85 4.52v-2c0-7.734 6.268-13 14-13s14 5.257 14 13z" fill="#7f8284"/></g></svg>
                    </span>
                    <span className='logo-lg'>
                        <svg height="40" viewBox="0 0 50 56" width="80" xmlns="http://www.w3.org/2000/svg"><g id="008---Male-Customer-Advisor" fill="none"><path id="Shape" d="m11 18v-3.01s2-11 14-11 14 11 14 11v3.01z" fill="#805333"/><path id="Shape" d="m39 24c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1c0-15.2-.064-15.679.15-16 .17-.29.49 2 .85 2 .2821782.000667.5509408.1205206.74.33.352 1.759.26 1.682.26 13.67z" fill="#a5a5a4"/><path id="Shape" d="m13 24c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1c0-11.654-.088-11.931.26-13.67.1890592-.2094794.4578218-.329333.74-.33.36 0 .68-2.29.85-2 .215.323.15.805.15 16z" fill="#a5a5a4"/><path id="Shape" d="m11 18h28c1.1045695 0 2 .8954305 2 2v6c0 1.1045695-.8954305 2-2 2h-28c-1.1045695 0-2-.8954305-2-2v-6c0-1.1045695.8954305-2 2-2z" fill="#547580"/><path id="Shape" d="m49.99 54.99c.0070495.2664925-.0943299.5244411-.28094.7148212-.1866102.19038-.4424798.2968975-.70906.2951788h-48c-.26658015.0017187-.52244979-.1047988-.70905996-.2951788-.18661018-.1903801-.28798951-.4483287-.28094004-.7148212v-3.99c.3-6.1 3.43-7 3.43-7l13.56-4h16l13.56 4s3.13.9 3.43 7z" fill="#285680"/><path id="Shape" d="m47.99 54.93c.0223712.2628169-.0611692.5236814-.2320522.7246098s-.4149489.3252712-.6779478.3453902h-44.16c-.26299893-.020119-.5070648-.1444618-.67794781-.3453902-.170883-.2009284-.25442339-.4617929-.23205219-.7246098v-4.24c.18-4.4 1.58-6.26 2.45-6.99l12.54-3.7h16l12.54 3.7c.87.73 2.27 2.59 2.45 6.99z" fill="#4482c3"/><path id="Shape" d="m33 33.23v6.77s-1 4-8 4-8-4-8-4v-6.77z" fill="#f9c795"/><path id="Shape" d="m35.264 25.93c.046 2.541.516 4.8-2.376 7.4-3.155 2.84-3.155 5.67-6.311 5.67h-3.155c-3.155 0-3.155-2.83-6.31-5.67-3.055-2.746-2.366-5.08-2.366-8.09 0-2.723-1.32-5.058-.435-8.119.4840767-1.9118779 1.4164587-3.6810042 2.72-5.161.5087715-.4852976 1.1782843-.7664859 1.881-.79 2.811-.18 10.871-.54 14.178 1.04 0 0 1.823 1.113 2.743 5.188.667 2.95-.633 5.002-.569 8.532z" fill="#fdd7ad"/><path id="Shape" d="m24 34h-10c-2.209139 0-4-1.790861-4-4v-2c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2c0 1.1045695.8954305 2 2 2h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z" fill="#a5a5a4"/><rect id="Rectangle-path" fill="#547580" height="4" rx="1" width="6" x="22" y="30"/><path id="Shape" d="m39 13v2c-.3609769-1.5990748-.986228-3.1267152-1.85-4.52-1.85-3.04-5.44-6.48-12.15-6.48s-10.3 3.44-12.15 6.48c-.863772 1.3932848-1.4890231 2.9209252-1.85 4.52v-2c0-7.734 6.268-13 14-13s14 5.257 14 13z" fill="#7f8284"/></g></svg>
                        <div className="namesLogo">
                            <h3 className="product">SIGANET</h3> 
                            <span className="company">Visual Sistemas</span>
                        </div>
                        
                    </span>
                </a>
                <nav className='navbar navbar-static-top'>
                    <div className="leftNav col-sm-9 col-md-9">
                        <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
                        <If test={!this.props.search}>
                            <Icon onClick={() => showSearchBar()} color='grey' className="searchIcon" name='search'></Icon>
                        </If>
                        <If test={this.props.search}>
                            <div className="divSearchHeader">
                                <Icon onClick={() => showSearchBar()} color='grey' className="searchIcon" name='close'></Icon>
                                <input className="searchInput" placeholder="Search.." type="text"/>
                            </div>
                        </If>
                    </div>
                    <div className="rightNav col-sm-3 col-md-3">
                        <Icon color='grey' size='large' className="bellIcon" name='bell outline'></Icon>
                        <Icon color='grey' size='large' className="mailIcon" name='mail outline'></Icon>
                        <div onClick={() => showUserInfo()}>
                            <Icon color='grey' size='large' className="userIcon" name='user circle'></Icon>
                            <span>Leandro Oliveira</span>
                        </div>
                    </div>
                    <If test={this.props.userInfo}>
                            <ul className="listInfoUser">
                                <li>
                                    <Icon color='grey' size='small' className="userIcon" name='setting'></Icon>
                                    <span>Configurações</span>
                                </li>
                                <li>
                                    <Icon color='grey' size='small' className="userIcon" name='user'></Icon>
                                    <span>Perfil</span>
                                </li>
                                <li className="lastItemInfoUser">
                                    <Icon color='grey' size='small' className="userIcon" name='mail'></Icon>
                                    <span>Mensagens</span>
                                </li>
                                <li>
                                    <Icon color='grey' size='small' className="userIcon" name='power'></Icon>
                                    <span>Sair</span>
                                </li>
                            </ul>
                        </If>
                </nav>
            </header>
        )
    }

}

const mapStateToProps = state => ({search: state.common.search, userInfo: state.common.userInfo})

const mapDispatchToProps = dispatch => bindActionCreators({showSearchBar, showUserInfo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)