import React from 'react'

import GuicheTableHeader from './guicheTableHeader'
import GuicheTableRow from './guicheTableRow'

export default props => (
    <div className="lineRow">
        <table className="guicheInfoTable">
            <thead className="guicheInfoTableHeader">
                <tr>
                    <GuicheTableHeader title='Atividade'></GuicheTableHeader>
                    <GuicheTableHeader title='Serviço'></GuicheTableHeader>
                    <GuicheTableHeader title='Seção'></GuicheTableHeader>
                </tr>
            </thead>
            <tbody>
                <GuicheTableRow></GuicheTableRow>
                <GuicheTableRow></GuicheTableRow>
                <GuicheTableRow></GuicheTableRow>
            </tbody>
        </table>
    </div>
)