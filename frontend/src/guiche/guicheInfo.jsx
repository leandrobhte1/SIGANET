import React, { Component } from 'react'

import GuicheRow from './guicheRow'
import GuicheSideButton from './guicheSideButton'
import GuicheTable from './guicheTable'
import GuicheButtons from './guicheButtons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { atendente  } from './guicheActions'

class GuicheInfo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="guicheInfo">
                <div className="guicheInfoTop">
                    <div className="guicheInfoTopLeft">
                        <div className="guicheInfoTopLeftFirst">
                            <GuicheRow lineInfo='Cliente' lineResp={this.props.guiche.cliente}></GuicheRow>
                            <GuicheRow lineInfo='Seção' lineResp={this.props.guiche.secao}></GuicheRow>
                            <GuicheRow lineInfo='Guichê' lineResp={this.props.guiche.guiche}></GuicheRow>
                            <GuicheRow lineInfo='Status' lineResp={this.props.guiche.status}></GuicheRow>
                            <GuicheRow lineInfo='Fila' lineResp={`${this.props.guiche.fila} senha(s)`}></GuicheRow>
                            <GuicheRow lineInfo='Atendente' lineResp={this.props.guiche.atendente}></GuicheRow>
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

const mapStateToProps = state => ({guiche: state.guiche})

const mapDispatchToProps = dispatch => bindActionCreators({ atendente }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GuicheInfo)