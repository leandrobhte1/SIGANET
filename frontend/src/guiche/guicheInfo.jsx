import React, { Component } from 'react'

import GuicheRow from './guicheRow'
import GuicheSideButton from './guicheSideButton'
import GuicheTable from './guicheTable'
import GuicheButtons from './guicheButtons'

export default class GuicheInfo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // const { credit, debt } = this.state
        return (
            <div className="guicheInfo">
                <div className="guicheInfoTop">
                    <div className="guicheInfoTopLeft">
                        <div className="guicheInfoTopLeftFirst">
                            <GuicheRow lineInfo='Cliente' lineResp='Pedro Pereira Lopes'></GuicheRow>
                            <GuicheRow lineInfo='Seção' lineResp='Atendimento'></GuicheRow>
                            <GuicheRow lineInfo='Guichê' lineResp='Guichê:02'></GuicheRow>
                            <GuicheRow lineInfo='Status' lineResp='Aguardando cliente'></GuicheRow>
                            <GuicheRow lineInfo='Fila' lineResp='11 senha(s)'></GuicheRow>
                            <GuicheRow lineInfo='Atendente' lineResp='Zamur Borges'></GuicheRow>
                            <GuicheRow lineInfo='Tempo' lineResp='0:12:37'></GuicheRow>
                        </div>
                        <div className="guicheInfoTopLeftSecond">
                            <GuicheTable></GuicheTable>
                        </div>
                    </div>
                    <div className="guicheInfoTopRight">
                        <GuicheSideButton></GuicheSideButton>
                    </div>
                </div>
                <div className="guicheInfoBottom">
                    <GuicheButtons></GuicheButtons>
                </div>
            </div>
        )
    }
}
