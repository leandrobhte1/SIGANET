import faker from 'faker'

faker.locale = 'pt_BR';

let showSearch = false;

let senhasFila = [];

let filaSenhas = 0;

let proximaSenhaGuiche = 1;

let emAtendimento = false;

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
        let request = senhaAtendimento;
        return [{type: 'INIT_TICKET', payload: request}]
    }else{
        let cliente = faker.Name.findName();
        let request = senhaAtendimento + 1;
        let status = 'EM ATENDIMENTO';
        let proximaSenha = proximaSenhaGuiche + 1;
        proximaSenhaGuiche = proximaSenhaGuiche + 1;
        emAtendimento = true;
        return [{ type: 'INIT_TICKET', payload: request },
        { type: 'CLIENT_CHANGED', payload: cliente},
        { type: 'STATUS_CHANGED', payload: status },
        { type: 'NEXT_TICKET_CHANGED', payload: proximaSenha },
        { type: 'EM_ATENDIMENTO_CHANGED', payload: emAtendimento }]
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

    emAtendimento = false;

    return [{ type: 'END_TICKET', payload: request },
        { type: 'STATUS_CHANGED', payload: status },
        { type: 'EM_ATENDIMENTO_CHANGED', payload: emAtendimento }]
}

export let unfreezeTicket = (senhaAtendimento) => {
    let status = 'SENHA DESCONGELADA';
    let congelada = false;
    emAtendimento = true;

    return [{ type: 'STATUS_CHANGED', payload: status },
        { type: 'EM_ATENDIMENTO_CHANGED', payload: emAtendimento },
        { type: 'UNFREEZE_TICKET', payload: congelada }]
}

export let freezeTicket = (senhaAtendimento) => {

    let status = 'SENHA CONGELADA';
    emAtendimento = false;
    let congelada = true;

    return [{ type: 'STATUS_CHANGED', payload: status },
        { type: 'EM_ATENDIMENTO_CHANGED', payload: emAtendimento },
        { type: 'FREEZE_TICKET', payload: congelada }]
}

export let createTicket = (senhaAtual, fila) => {

    filaSenhas = filaSenhas + 1;
    
    let request = fila + 1;
    let status = 'AGUARDANDO CLIENTE';
    senhasFila.push(senhaAtual + 1);
    let novaSenhaAtual = senhaAtual + 1;

    return [{ type: 'TICKET_CREATED', payload: request },
        { type: 'STATUS_CHANGED', payload: status },
        { type: 'TICKET_ROW_CHANGED', payload: senhasFila },
        { type: 'TICKET_CHANGED', payload: novaSenhaAtual },
        { type: 'CONT_TICKET', payload: filaSenhas }]

}
