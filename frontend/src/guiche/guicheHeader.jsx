import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTicket } from './guicheActions'

class GuicheHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // const { credit, debt } = this.state
        return (
            <div className="guicheHeader">
                <div className="senhaChamada">
                    <h2>{this.props.guiche.senhaAtendimento}</h2>
                </div>
                <div className="boxInfoGuiche firstBoxInfoGuiche">
                    <span className="titleGuicherHeader">Comum</span>
                    <span className="subtitleGuicheHeader">Prioridade</span>
                </div>
                <div className="boxInfoGuiche">
                    <span className="titleGuicherHeader">Vídeo Atendimento</span>
                    <span className="subtitleGuicheHeader">Categoria</span>
                </div>
                <div className="boxInfoGuiche">
                    <span className="titleGuicherHeader">Encaminhar Documentos</span>
                    <span className="subtitleGuicheHeader">Atividade</span>
                </div>
                <div className="boxInfoGuiche">
                    <span className="titleGuicherHeader">08:40:12 16/03/2020</span>
                    <span className="subtitleGuicheHeader">Hora e Data de emissão</span>
                </div>
                <div className="boxInfoGuiche">
                    <span className="titleGuicherHeader">08:40:12</span>
                    <span className="subtitleGuicheHeader">Tempo total de espera</span>
                </div>
                <div className="boxInfoGuiche">
                    <span className="titleGuicherHeader">08:40:12</span>
                    <span className="subtitleGuicheHeader">Tempo total de atendimento efetivo</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({guiche: state.guiche})

const mapDispatchToProps = dispatch => bindActionCreators({ createTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuicheHeader)