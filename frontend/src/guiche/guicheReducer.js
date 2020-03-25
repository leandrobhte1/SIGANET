const INITIAL_STATE = {senhaAtendimento: 0, senhaAtual: 0, atendente: 'Zamur Borges', cliente: 'NENHUM CLIENTE ENCONTRADO', secao: 'Atendimento', guiche: 'Guichê:02', status: 'SEM SENHAS NA FILA', fila: 0, senhasFila: []}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ATENDENTE_CHANGED':
            return { ...state, atendente: action.payload }
        case 'TICKET_ROW_CHANGED':
            return { ...state, senhasFila: action.payload }
        case 'TICKET_CREATED':
            return { ...state, fila: action.payload }
        case 'STATUS_CHANGED':
            return { ...state, status: action.payload }
        case 'TICKET_CHANGED':
            return { ...state, senhaAtual: action.payload }
        case 'INIT_TICKET':
            return { ...state, senhaAtendimento: action.payload }
        case 'END_TICKET':
            return { ...state, fila: action.payload }
        case 'CLIENT_CHANGED':
            return { ...state, cliente: action.payload }
        default:
            return state
    }
}