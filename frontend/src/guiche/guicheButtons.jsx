import React, { Component } from 'react'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTicket, initTicket, endTicket, cancelTicket, freezeTicket, unfreezeTicket } from './guicheActions'

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

    congelaSenha() {
        this.props.freezeTicket(this.props.guiche.senhaAtendimento);
    }

    descongelaSenha() {
        this.props.unfreezeTicket(this.props.guiche.senhaAtendimento);
    }

    mostrarSenhasFila() {

    }

    render() {
        let habilitaIniciarAtendimento = ((this.props.guiche.fila >= 1 && this.props.guiche.emAtendimento == false) || this.props.guiche.emAtendimento == true) ? true : false;

        let habilitaFinalizarAtendimento = (this.props.guiche.emAtendimento == true && this.props.guiche.fila > 0) ? true : false;

        console.log("senhasFilaaa.: ",this.props.guiche.senhasFila)
        return (
            <div className="guicheButtons">
                <button onClick={() => this.criaSenha()} className='guicheButtonsBottom'>Cria senha</button>
                <button onClick={() => this.iniciaAtendimento()} disabled={`${habilitaIniciarAtendimento == true ? '' : 'disabled'}`} className={`guicheButtonsBottom ${habilitaIniciarAtendimento == true ? '' : 'disabled'}`}>Inicia atendimento</button>
                <button onClick={() => this.finalizaAtendimento()} disabled={`${habilitaFinalizarAtendimento == true ? '' : 'disabled'}`} className={`guicheButtonsBottom ${habilitaFinalizarAtendimento == true ? '' : 'disabled'}`}>Finaliza atendimento</button>
                <button className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''}`}>Rechama senha</button>
                <button onClick={() => this.congelaSenha()} disabled={`${habilitaFinalizarAtendimento == true ? '' : 'disabled'}`} className={`guicheButtonsBottom ${habilitaFinalizarAtendimento == true ? '' : 'disabled'}`}>Congela senha</button>
                <button onClick={() => this.descongelaSenha()} disabled={`${this.props.guiche.senhaCongelada == true ? '' : 'disabled'}`} className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''} ${this.props.guiche.senhaCongelada == true ? '' : 'disabled'}`}>Descongela senha</button>
                <button onClick={() => this.cancelarSenha()} className={`guicheButtonsBottom ${this.props.guiche.fila == 0 ? 'disabled' : ''}`}>Cancela senha</button>
                <button className='guicheButtonsBottom'>Transfere mesa</button>
                <button className='guicheButtonsBottom'>Solicita apoio</button>
                <button onClick={() => this.mostrarSenhasFila()} className='guicheButtonsBottom'>Senhas na fila</button>            
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

const mapDispatchToProps = dispatch => bindActionCreators({ createTicket, initTicket, endTicket, cancelTicket, freezeTicket, unfreezeTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuicheButtons)