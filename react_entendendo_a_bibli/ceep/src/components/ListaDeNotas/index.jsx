import React,{ Component } from 'react';
import CardNotas from '../CardNota';
import './estilo.css';

class ListaDeNotas extends Component{
    render(){
        return (
        <ul className="lista-notas" >
            {this.props.notas.map(
                (nota,id)=>{
                    return(
                        <li  className="lista-notas_item" key={id} >
                            <CardNotas titulo={nota.titulo} texto={nota.texto}/>
                        </li>
                    )
                }
            )}
        </ul>
        );
    }
}

export default ListaDeNotas;