import React from 'react'

import { Icon } from 'semantic-ui-react'

export default props => (
    <li className={`MenuItemList  ${props.label == 'Guichê' ? 'active' : ''}`}>
        <a href={props.path}>
            <Icon color={props.color} name={props.icon}></Icon>
            <span>{props.label}</span>
            {/* <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span> */}
        </a>
    </li>
)