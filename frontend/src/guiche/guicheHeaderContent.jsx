import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTicket } from './guicheActions'

class GuicheHeaderContent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={`boxInfoGuiche ${this.props.first == true ? 'firstBoxInfoGuiche' : ''}`}>
                <span className="titleGuicherHeader">{this.props.headerInfo}</span>
                <span className="subtitleGuicheHeader">{this.props.headerInfoContent}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({guiche: state.guiche})

const mapDispatchToProps = dispatch => bindActionCreators({ createTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuicheHeaderContent)