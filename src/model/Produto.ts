import { colors } from "../util/Colors";

export abstract class Produto {

    private _numero: number;
    private _versao: number;
    private _tipo: number;
    private _nome: string;
    private _valor: number;

    constructor(numero: number, versao: number, tipo: number, nome: string, valor: number) {
        this._numero = numero;
        this._versao = versao;
        this._tipo = tipo;
        this._nome = nome;
        this._valor = valor;
    }

    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get versao() {
        return this._versao;
    }

    public set versao(versao: number) {
        this._versao = versao;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get valor() {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Caixa Surpresa";
                break;
            case 2:
                tipo = "Produto Comum";
                break;
        }

        console.log(colors.fg.magenta,"\n\n♡===================================================♡", colors.reset);
        console.log("Descrição dos Itens:");
        console.log(colors.fg.magenta + "♡===================================================♡", colors.reset);
        console.log("Numero do Produto: " + this._numero);
        console.log("Versão: " + this._versao);
        console.log("Tipo (Coleção): " + tipo);
        console.log("Nome do Produto: " + this._nome);
        console.log("Valor do Produto: " + this._valor.toFixed(2));

    }
}

