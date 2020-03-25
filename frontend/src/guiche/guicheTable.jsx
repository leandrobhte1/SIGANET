import React from 'react'

export default props => (
    <div className="lineRow">
        <table className="guicheInfoTable">
                                <thead className="guicheInfoTableHeader">
                                    <th className="guicheInfoTableHeaderItem">Atividade</th>
                                    <th className="guicheInfoTableHeaderItem">Serviço</th>
                                    <th className="guicheInfoTableHeaderItem">Seção</th>
                                </thead>
                                <tbody>
                                    <tr className='guicheInfoTableRow'>
                                        <td>EMR - Transformador em Chamas</td>
                                        <td>EMR - Transformador em Chamas</td>
                                        <td>ATENDIMENTO</td>
                                    </tr>
                                    <tr className='guicheInfoTableRow'>
                                        <td>Outra Atividade</td>
                                        <td>Encaminhar documentos</td>
                                        <td>ATENDIMENTO</td>
                                    </tr>
                                    <tr className='guicheInfoTableRow'>
                                        <td>Outra Atividade</td>
                                        <td>Encaminhar documentos</td>
                                        <td>ATENDIMENTO</td>
                                    </tr>
                                </tbody>
                            </table>
    </div>
)