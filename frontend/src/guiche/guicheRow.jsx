import React from 'react'

export default props => (
    <div className="lineRow">
        <span className='lineInfo'>{props.lineInfo}</span>
        <span className={`lineResp ${props.fontSize == undefined ? '' : props.fontSize} ${props.colorText == undefined ? '' : props.colorText} ${props.lineInfo == 'Cliente' ? 'guicheCliente' : ''}`}>{props.lineResp}</span>
    </div>
)