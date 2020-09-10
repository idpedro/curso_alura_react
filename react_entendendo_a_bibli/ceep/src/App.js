import React from 'react';
import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (  
    <>
      <form>
        <input type='text' placeholder='Titulo'/>
        <textarea placeholder='Escreva sua nota'></textarea>
        <button>Criar nota</button>
    </form>  
    <ListaDeNotas/>
  </>
  );
}

export default App;
