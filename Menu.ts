import leia from "readline-sync";
import { colors } from './src/util/Colors';
import { ProdutoSurpresa } from "./src/model/ProdutoSurpresa";
import { ProdutoComum } from "./src/model/ProdutoComum";
import { ProdutoController } from "./src/controller/ProdutoController";


export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, numero, versao, tipo, valor: number;
    let cor, nome, colecao: string;
    const tiposProdutos = ["Colecao Produto Surpresa", "Colecao Produto Comum"]

    console.log("\nCriar Contas\n");

    let cc1: ProdutoSurpresa = new ProdutoSurpresa(produtos.gerarNumero(), 1, 1, "Labubu", 200, "rosa");
    produtos.cadastrar(cc1);

    let cc2: ProdutoSurpresa = new ProdutoSurpresa(produtos.gerarNumero(), 1, 2, "CryBaby", 150, "Azul");
    produtos.cadastrar(cc2);

    let cp1: ProdutoComum = new ProdutoComum(produtos.gerarNumero(), 2, 1, "Funko Pop", 350, "Harry Potter");
    produtos.cadastrar(cp1);

    let cp2: ProdutoComum = new ProdutoComum(produtos.gerarNumero(), 2, 2, "Funko Pop", 300, "Stranger Things");
    produtos.cadastrar(cp2);

    produtos.listarTodas();
    
    while (true) {

        console.log(colors.fg.magenta + 
                    "♡===================================================♡", colors.reset);
        console.log("                                                     ");
        console.log(colors.fg.cyan + "                ♡  BELLA TOYS  ♡                   ", colors.reset);
        console.log("                                                     ");
        console.log(colors.fg.magenta + "♡==================================================♡", colors.reset);
        console.log(colors.fg.cyan + "                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Todos                         ");
        console.log("            3 - Listar Produto por Número            ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ", colors.reset);
        console.log(colors.fg.magenta + "♡===================================================♡",colors.reset);
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.cyan,
                "\n♡ BELLA TOYS ♡ - Produtos Colecionáveis!\n");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }
        
        switch (opcao) {
            case 1:
                console.log(colors.fg.magenta,"\n\nCadastrar Produto\n\n", colors.reset);

                console.log(colors.fg.cyan + "Digite o Número da Versão do Produto: ", colors.reset);
                versao = leia.questionInt("");

                console.log(colors.fg.cyan + "Digite o Nome do Produto: ", colors.reset);
                nome = leia.question("");

                console.log(colors.fg.cyan + "Digite o Tipo de Produto: ", colors.reset);
                tipo = leia.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;

                console.log(colors.fg.magenta + "Digite o Valor do Produto (R$): ", colors.reset);
                valor = leia.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log(colors.fg.magenta + "Digite a cor da caixa surpresa do Produto: ", colors.reset);
                        cor = leia.question("");
                        produtos.cadastrar(
                            new ProdutoSurpresa(produtos.gerarNumero(), versao, tipo, nome, valor, cor));
                        break;
                    case 2:
                        console.log(colors.fg.magenta + "Digite de qual Coleção é o Produto: ", colors.reset);
                        colecao = leia.question("");
                        produtos.cadastrar(new ProdutoComum(produtos.gerarNumero(), versao, tipo, nome, valor, colecao));
                        break;
                }

                keyPress()
                break;
            case 2: 
                console.log(colors.fg.magenta,"\n\nListar Todos\n\n", colors.reset);

                produtos.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.magenta,"\n\nListar Produtos por Número \n\n", colors.reset);

                console.log("Digite o número do Produto: ");
                numero = leia.questionInt("");
                produtos.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.magenta,"\n\nAtualizar Produtos\n\n", colors.reset);

                console.log("Digite o número do Produto: ");
                numero = leia.questionInt("");

                let produto = produtos.buscarNoArray(numero);

                if (produto != null) {

                    console.log("Digite o Número da Versão: ");
                    versao = leia.questionInt("");

                    console.log("Digite o Nome do produto: ");
                    nome = leia.question("");

                    tipo = produto.tipo;

                    try {
                        valor = lerPrecoPositivo("Digite o valor do Produto (R$): ");
                    } catch (erro: any) {
                        console.error(colors.fg.red, "\nErro: " + erro.message, colors.reset);

                        keyPress();
                        break;
                    }


                    switch (tipo) {
                        case 1 :
                            console.log("Digite a cor da Caixa Surpresa: ");
                            cor = leia.question("");
                            produtos.atualizar(
                                new ProdutoSurpresa(numero, versao, tipo, nome, valor, cor));
                            break;
                        case 2:
                            console.log("Digite a Coleção que esse Produto pertence: ");
                            colecao = leia.question("");
                            produtos.atualizar(new ProdutoComum(numero, versao, tipo, nome, valor, colecao));
                            break;
                    }
                }else {
                    console.log(colors.fg.red, "\nO produto número: " + numero + " não foi encontrado!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.magenta,"\n\nDeletar Produto\n\n", colors.reset);

                console.log("Digite o número do Produto: ");
                numero = leia.questionInt("");
                produtos.deletar(numero);

                keyPress()
                break;
            default:
                console.log(colors.fg.red,
                    "\nOpção Inválida!\n", colors.reset);
                
                    keyPress()
                    break;
        }
    }
}

function sobre(): void {
        console.log(colors.fg.magenta + "♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡", colors.reset);
        console.log(colors.fg.cyan +"Projeto Desenvolvido por: ", colors.reset);
        console.log("Ysabella Santos - ysabella3909@gmail.com");
        console.log("https://github.com/ysabellax/projeto-e-commerce.git");
        console.log(colors.fg.magenta +"♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡\n", colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...\n");
    leia.prompt();
}

function lerPrecoPositivo(mensagem: string): number {
    const valor = leia.questionFloat(mensagem);

    if (valor <= 0) {
        throw new Error("O preço não pode ser negativo.");
    }

    return valor;
}

main ();