import React from 'react'

export default props => (
    <div className="lineRow">
        <span className='lineInfo'>{props.lineInfo}</span>
        <span className={`lineResp  ${props.lineResp == 'Pedro Pereira Lopes' ? 'guicheCliente' : ''}`}>{props.lineResp}</span>
    </div>
)