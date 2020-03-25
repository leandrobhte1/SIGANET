import faker from 'faker'

faker.locale = 'pt_BR';

let showSearch = false;

let senhasFila = [];

export function showSearchBar() {
    showSearch = !showSearch;
    console.log("value.: ",showSearch);
    let request = showSearch;
    return {
        type: 'SHOW_SEARCH_BAR_CHANGED',
        payload: request
    }
}

export let initTicket = (senhaAtendimento, senhaAtual) => {
    if(senhaAtendimento >= senhaAtual){
        alert("Sem senhas na fila!");
    }else{
        faker.locale = "pt_BR";
        let cliente = faker.Name.findName();
        console.log("cliente.: ", cliente);
        let request = senhaAtendimento + 1;
        let status = 'EM ATENDIMENTO';
        return [{ type: 'INIT_TICKET', payload: request },
        { type: 'CLIENT_CHANGED', payload: cliente},
        { type: 'STATUS_CHANGED', payload: status }]
    }
}

export let cancelTicket = (senhaAtendimento, senhaAtual) => {
    if(senhaAtendimento == senhaAtual && senhaAtual != 0){
        let request = 'SENHA CANCELADA';
        return [{ type: 'STATUS_CHANGED', payload: request }]
    }
}

export let endTicket = (fila) => {

    let status = 'AGUARDANDO CLIENTE';
    let request = fila - 1;
    if(request == 0){
        status = 'SEM SENHAS NA FILA';
    }

    return [{ type: 'END_TICKET', payload: request },
        { type: 'STATUS_CHANGED', payload: status }]
}

export let createTicket = (senhaAtual, fila) => {

    
    let request = fila + 1;
    let status = 'AGUARDANDO CLIENTE';
    senhasFila.push(senhaAtual + 1);
    let novaSenhaAtual = senhaAtual + 1;

    return [{ type: 'TICKET_CREATED', payload: request },
        { type: 'STATUS_CHANGED', payload: status },
        { type: 'TICKET_ROW_CHANGED', payload: senhasFila },
        { type: 'TICKET_CHANGED', payload: novaSenhaAtual } ]

}
