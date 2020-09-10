import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import { Component } from 'react';

class App extends Component {
  render(){
    return (  
      <>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </>
    )
};
}

export default App;
