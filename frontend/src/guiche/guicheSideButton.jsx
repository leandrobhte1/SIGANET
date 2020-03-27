import React, { Component } from 'react'

export default class GuicheSideButton extends Component {

    render() {
        return (
            <div className="guicheSideButton">
                <ul className="guicheSideButtonList">
                    <li className="guicheSideButtonListItem"> <button> Adicionar Atividade </button> </li>
                    <li className="guicheSideButtonListItem"> <button> Remove atividade </button> </li>
                    <li className="guicheSideButtonListItem"> <button> Alterar serviço </button> </li>
                    <li className="guicheSideButtonListItem"> <button> Alterar Prioridade </button> </li>
                    <li className="guicheSideButtonListItem"> <button> Alterar Categoria </button> </li>
                    <li className="guicheSideButtonListItem"> <button> Adicionar Cidadão </button> </li>
                    <li className="guicheSideButtonListItem"> <button> Comentário </button> </li>
                </ul>
            </div>
        )
    }

}
