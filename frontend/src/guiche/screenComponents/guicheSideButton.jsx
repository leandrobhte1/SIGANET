import React, { Component } from 'react'

import GuicheButtonItem from './guicheSideButtonItemList'

export default class GuicheSideButton extends Component {

    render() {
        return (
            <div className="guicheSideButton">
                <ul className="guicheSideButtonList">
                    <GuicheButtonItem buttonText='Adicionar Atividade'></GuicheButtonItem>
                    <GuicheButtonItem buttonText='Remove Atividade'></GuicheButtonItem>
                    <GuicheButtonItem buttonText='Alterar Serviço'></GuicheButtonItem>
                    <GuicheButtonItem buttonText='Alterar Prioridade'></GuicheButtonItem>
                    <GuicheButtonItem buttonText='Alterar Categoria'></GuicheButtonItem>
                    <GuicheButtonItem buttonText='Adicionar Cidadão'></GuicheButtonItem>
                    <GuicheButtonItem buttonText='Comentário'></GuicheButtonItem>
                </ul>
            </div>
        )
    }

}
