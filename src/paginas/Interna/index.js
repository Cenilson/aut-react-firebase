import '../../css/style.css'
import React, {Component} from "react"
import {Link} from "react-router-dom" 
import firebase from '../../Firebase';

class Interna extends Component {
  constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        dtnasc: ""
      }
  }

  async componentDidMount(){

    firebase.auth().onAuthStateChanged(async (usuario) => {

          if (usuario) {
              var uid = usuario.uid;

              await firebase.firestore().collection("usuario").doc(uid).get()
                  .then((retorno) => {
                      this.setState({
                          nome: retorno.data().nome,
                          sobrenome: retorno.data().sobrenome,
                          dtnasc: retorno.data().dtnasc,
                      });
                  });
          }
      })

  }

  render(){
      return (
          <div className='container'>
            <header className='Header'>
              <h2>Bem vindo!</h2>
            </header> 
            <br/>

          <div className='form'>
            <div className='inputContainer'>
              <p>Nome: {this.state.nome}</p>
            </div>
            <div className='inputContainer'>
              <p>Sobrenome: {this.state.sobrenome}</p>
            </div>
            <div className='inputContainer'>
              <p>Data de Nascimento: {this.state.dtnasc}</p>
            </div>

            <Link to="/" className='button'> Deslogar ↪ </Link>
          </div>
          </div>
      )
  }
}
export default Interna 