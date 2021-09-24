import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = { notas: [] }

        this._novasNotas = this._novasNotas.bind(this);
    }

    componentDidMount() { //quando é criado
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount() { //quando é destruído
        this.props.notas.desisncrever(this._novasNotas);
    }

    _novasNotas(notas) {
        this.setState({ ...this.state, notas })
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>

                            <CardNota
                                indice={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                texto={nota.texto}
                                categoria={nota.categoria} /> {/*titulo e texto estão vindo através do state, lá na página App.js */}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;