import React, { Component } from 'react'

export default class GuicheSideButtonItemList extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <li className="guicheSideButtonListItem"> <button> {this.props.buttonText} </button> </li>
            </div>
        )
    }

}
