import React, { Component } from 'react'
import "./estilo.css"

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] }

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {  //quando é criado
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() { //quando é destruído
        this.props.categorias.desisncrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias })
    }

    _hendleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
            e.target.value = "";
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>;
                    })}
                </ul>
                <section className="lista-categorias_fundo_input">
                    <input type="text"
                        className="lista-categorias_input"
                        placeholder="+ Adicionar Categoria"
                        onFocus={(e) => { e.target.placeholder = "" }}
                        onBlur={(e) => { e.target.placeholder = "+ Adicionar Categoria" }}
                        onKeyUp={this._hendleEventoInput.bind(this)}
                    />
                </section>
            </section>
        );
    }
}

export default ListaDeCategorias;