import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;
    listaContas: any;

    procurarPorNumero(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        }else {
            console.log(colors.fg.red, "\nO produto: " + numero + " não foi encontrado!", colors.reset);
        }
    }
    listarTodas(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        };
    }
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.cyan, "\nO produto: " + produto.numero + " Foi cadastrado com sucesso!", colors.reset);
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero);

        if (buscaProduto != null) {
            this.listaContas[this.listaContas.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.magenta, "\nO produto numero: " + produto.numero + " foi atualizado com sucesso!", colors.reset);
        }else {
            console.log(colors.fg.red, "\nO produto numero: " + produto.numero + " não foi encontrado!", colors.reset);
        }
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    
    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.numero === numero)
                return produto;
        }
        return null;
    }
}