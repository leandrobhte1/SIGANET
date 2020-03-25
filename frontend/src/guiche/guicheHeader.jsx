import React, { Component } from 'react'

import axios from 'axios'
const BASE_URL = 'http://localhost:3011/api'

export default class GuicheHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // const { credit, debt } = this.state
        return (
            <div className="guicheHeader">
                <div className="senhaChamada">
                    <h2>32</h2>
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
