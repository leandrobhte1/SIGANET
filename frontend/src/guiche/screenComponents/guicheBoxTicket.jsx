import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTicket } from '../guicheActions'

class GuicheBoxTicket extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="senhaChamada">
                <h2>{this.props.guiche.senhaAtendimento}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({guiche: state.guiche})

const mapDispatchToProps = dispatch => bindActionCreators({ createTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuicheBoxTicket)