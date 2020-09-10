import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component{
    constructor(props){
        super(props);
        this._titulo ='';
        this._texto = '';
    }
    _handlerMudaTitulo = evento => {
        evento.stopPropagation();
        this._titulo = evento.target.value;
    }
    _handlerMudaTexto = evento => { 
        evento.stopPropagation();
        this._texto = evento.target.value
    };
    _criarNota = evento => {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this._titulo,this._texto);
    }
    

    render(){
        return (
        <form 
            className="form-cadastro"
            onSubmit={this._criarNota}
        >
            <input 
                type='text' 
                placeholder='Titulo'
                className="form-cadastro_input"
                onChange={this._handlerMudaTitulo}
            />
            <textarea 
                placeholder='Escreva sua nota' 
                className="form-cadastro_input"
                onChange={this._handlerMudaTexto}
            ></textarea>
            <button 
                className="form-cadastro_input form-cadastro_submit"
            >Criar nota</button>
        </form>  
        );
    }
}

export default FormularioCadastro;