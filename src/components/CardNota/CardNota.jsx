import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg"

class CardNota extends Component {

    apagar() {
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG
                        className="card-nota_lixeira"
                        onClick={this.apagar.bind(this)} />
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p> {/*titulo e texto estão vindo através do state, lá na página ListaDeNotas.js */}
            </section>
        );
    }
}

export default CardNota;
