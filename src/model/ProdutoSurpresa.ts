import {Produto} from './Produto';

export class ProdutoSurpresa extends Produto {
    private _cor: string;

    constructor(numero: number, versao: number, tipo: number, nome: string, valor: number, cor: string) {
        super(numero, versao, tipo, nome, valor);
        this._cor = cor;
    }

    public get cor() {
        return this._cor;
    }

    public set cor(cor: string) {
        this._cor = cor;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Produto Surpresa- Blind Box: " + this._cor);
    }
}