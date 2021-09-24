export default class ArrayNotas {

    constructor() {
        this.notas = [];
        this._incritos = [];
    }

    inscrever(func) {
        this._incritos.push(func);
    }

    desisncrever(func) {
        this._incritos = this._incritos.filter(f => f !== func);
    }

    notificar() {
        this._incritos.forEach(func => func(this.notas));
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}