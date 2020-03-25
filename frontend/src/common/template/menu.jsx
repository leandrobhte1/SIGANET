import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './MenuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#' label='Supervisor' color='brown' icon='user secret'></MenuItem>
        <MenuItem path='#' label='Emissor' color='red' icon='print'></MenuItem>
        <MenuItem path='#' label='Guichê' color='blue' icon='desktop'></MenuItem>
        <MenuItem path='#' label='Ajuda' color='grey' icon='help'></MenuItem>
        {/* <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd'></MenuItem>
        </MenuTree> */}
    </ul>
)