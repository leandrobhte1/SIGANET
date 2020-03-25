import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTicket, initTicket, endTicket, cancelTicket } from './guicheActions'

class GuicheButtons extends Component {

    constructor(props) {
        super(props)
    }

    criaSenha(){
        this.props.createTicket(this.props.guiche.senhaAtual, this.props.guiche.fila);
    }

    iniciaAtendimento() {
        this.props.initTicket(this.props.guiche.senhaAtendimento, this.props.guiche.senhaAtual);
    }

    finalizaAtendimento() {
        this.props.endTicket(this.props.guiche.fila);
    }

    cancelarSenha(){
        this.props.cancelTicket(this.props.guiche.senhaAtendimento, this.props.guiche.senhaAtual);
    }

    render() {
        return (
            <div className="guicheButtons">
                <button onClick={() => this.criaSenha()} className='guicheButtonsBottom'>Cria senha</button>
                <button onClick={() => this.iniciaAtendimento()} className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''}`}>Inicia atendimento</button>
                <button onClick={() => this.finalizaAtendimento()} className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''} ${this.props.guiche.senhaAtual != this.props.guiche.senhaAtendimento ? 'disabled' : ''}`}>Finaliza atendimento</button>
                <button className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''}`}>Rechama senha</button>
                <button className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''}`}>Congela senha</button>
                <button className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''}`}>Descongela senha</button>
                <button onClick={() => this.cancelarSenha()} className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''}`}>Cancela senha</button>
                <button className='guicheButtonsBottom'>Transfere mesa</button>
                <button className='guicheButtonsBottom'>Solicita apoio</button>
                <button className='guicheButtonsBottom'>Senhas na fila</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
                <button className='guicheButtonsBottom disabled' disabled>Outra ação</button>
            </div>
        )
    }
}
    
const mapStateToProps = state => ({guiche: state.guiche})

const mapDispatchToProps = dispatch => bindActionCreators({ createTicket, initTicket, endTicket, cancelTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuicheButtons)