import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTicket } from '../guicheActions'

import GuicheHeaderContent from './guicheHeaderContent'
import GuicheBoxTicket from './guicheBoxTicket'

class GuicheHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="guicheHeader">
                <GuicheBoxTicket></GuicheBoxTicket>
                <GuicheHeaderContent headerInfo='Comum' first={true} headerInfoContent='Prioridade'></GuicheHeaderContent>
                <GuicheHeaderContent headerInfo='Vídeo Atendimento' headerInfoContent='Categoria'></GuicheHeaderContent>
                <GuicheHeaderContent headerInfo='Encaminhar Documentos' headerInfoContent='Atividade'></GuicheHeaderContent>
                <GuicheHeaderContent headerInfo='08:40:12 16/03/2020' headerInfoContent='Hora e Data de emissão'></GuicheHeaderContent>
                <GuicheHeaderContent headerInfo='08:40:12' headerInfoContent='Tempo total de espera'></GuicheHeaderContent>
                <GuicheHeaderContent headerInfo='08:40:12' headerInfoContent='Tempo total de atendimento efetivo'></GuicheHeaderContent>
            </div>
        )
    }
}

const mapStateToProps = state => ({guiche: state.guiche})

const mapDispatchToProps = dispatch => bindActionCreators({ createTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuicheHeader)