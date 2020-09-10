import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import "./assets/App.css";
import './assets/index.css';
import { Component } from 'react';

class App extends Component {
  criarNota = (titulo,texto) =>{
    console.log(`Criando nova nota ${titulo}: ${texto}`)

  } 
  render(){
    return (  
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    )
};
}

export default App;
