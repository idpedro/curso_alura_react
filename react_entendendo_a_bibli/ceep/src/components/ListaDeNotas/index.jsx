import React,{ Component } from 'react';
import CardNotas from '../CardNota';
import './estilo.css';

class ListaDeNotas extends Component{
    render(){
        return (
        <ul className="lista-notas" >
            {Array.of("Trabalho","Trabalho","Estudos").map(
                (categoria,id)=>{
                    return(
                        <li  className="lista-notas_item" key={id} >
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