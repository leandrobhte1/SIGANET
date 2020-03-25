import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import GuicheHeader from './guicheHeader'
import GuicheInfo from './guicheInfo'

export default class Guiche extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // const { credit, debt } = this.state
        return (
            <div>
                {/* <ContentHeader title='SIGANET' small='Versão 1.0'></ContentHeader> */}
                <Content>
                    <GuicheHeader></GuicheHeader>
                    <GuicheInfo></GuicheInfo>
                </Content>
            </div>
        )
    }
}
