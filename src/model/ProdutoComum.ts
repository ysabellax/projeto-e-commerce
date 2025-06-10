import {Produto} from './Produto';

export class ProdutoComum extends Produto {
    private _colecao: string;

    constructor(numero: number, versao: number, tipo: number, nome: string, valor: number, colecao: string) {
        super(numero, versao, tipo, nome, valor);
        this._colecao = colecao;
    }

    public get colecao() {
        return this._colecao;
    }

    public set colecao(colecao: string) {
        this._colecao = colecao;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Produto (Coleção): " + this._colecao);
    }
}