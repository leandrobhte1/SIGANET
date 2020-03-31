import React, { Component } from 'react'

import Content from '../common/template/content'
import GuicheHeader from './screenComponents/guicheHeader'
import GuicheInfo from './screenComponents/guicheInfo'

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
