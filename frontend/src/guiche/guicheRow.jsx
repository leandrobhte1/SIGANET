import React from 'react'

export default props => (
    <div className="lineRow">
        <span className='lineInfo'>{props.lineInfo}</span>
        <span className={`lineResp  ${props.lineInfo == 'Cliente' ? 'guicheCliente' : ''}`}>{props.lineResp}</span>
    </div>
)