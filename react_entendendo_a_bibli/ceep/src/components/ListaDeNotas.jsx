import React,{ Component } from 'react';
import CardNotas from './CardNota/CardNotas';

class ListaDeNotas extends Component{
    render(){
        return (
        <ul>
            {Array.of("Trabalho","Trabalho","Estudos").map(
                (categoria,id)=>{
                    return(
                        <li key={id} >
                            <div>{categoria}</div>
                            <CardNotas/>
                        </li>
                    )
                }
            )}
        </ul>
        );
    }
}

export default ListaDeNotas;