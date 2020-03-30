import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTicket, initTicket, endTicket, cancelTicket, freezeTicket, unfreezeTicket } from './guicheActions'

let senha = '';

class ModalInput extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("Confirmou.: ", senha);

    let { fluxo, senhaAtual, senhasFila, senhasList } = this.props
    this.props.finalizaSenhaList(senha);
  }

  savePress(e){

    let control = 0;

    console.log("e.: ",e.target.value)
    senha = e.target.value;

    console.log("Senha.: ", senha);

    let { fluxo, senhaAtual, senhasFila, senhasList } = this.props

    senhasList.map(s => {
      if(s == senha){
        console.log("Senha existe na fila!");
        control = 1;
      }
    })

    if(control == 0) {
      alert("Senha não encontrada na fila!");
    }
  }

  render() {

    return(
      <Modal trigger={<Button className="btMenu">{this.props.name}</Button>} closeIcon>
        <Header icon='warning circle' content={this.props.titulo} />
        <Modal.Content>
          <input onKeyUp={this.savePress} className="react-autosuggest__input" type="number" placeholder={this.props.placeholder} ></input>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button color='red'>
            <Icon name='remove' /> Não
          </Button> */}
          <Button onClick={this.handleClick} color='green'>
            <Icon name='checkmark' /> Confirmar
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

const mapStateToProps = state => ({guiche: state.guiche})

const mapDispatchToProps = dispatch => bindActionCreators({ createTicket, initTicket, endTicket, cancelTicket, freezeTicket, unfreezeTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ModalInput)