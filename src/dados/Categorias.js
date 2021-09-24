export default class Categorias {

    constructor() {
        this.categorias = [];
        this._incritos = [];
    }

    inscrever(func) {
        this._incritos.push(func);
    }

    desisncrever(func) {
        this._incritos = this._incritos.filter(f => f !== func);
    }

    notificar() {
        this._incritos.forEach(func => func(this.categorias));
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}