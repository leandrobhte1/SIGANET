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
        return (
            <div>
                <Content>
                    <GuicheHeader></GuicheHeader>
                    <GuicheInfo></GuicheInfo>
                </Content>
            </div>
        )
    }
}
