import leia from "readline-sync";
import { colors } from './src/util/Colors';
import { ProdutoSurpresa } from "./src/model/ProdutoSurpresa";
import { ProdutoComum } from "./src/model/ProdutoComum";


export function main() {

    let opcao: number;

    const produtosurpresa: ProdutoSurpresa = new ProdutoSurpresa(2, 2, 1, "Labubu", 150, "Caixa Verde");
    produtosurpresa.visualizar();

    const produtocomum: ProdutoComum = new ProdutoComum(3, 1, 2, "Funko Pop", 250, "Harry Potter");
    produtocomum.visualizar();
    
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
        console.log(colors.fg.magenta + "♡===================================================♡", colors.reset);
        console.log("                                                     ",
        colors.reset);

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

                keyPress()
                break;
            case 2: 
                console.log(colors.fg.magenta,"\n\nListar Todos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.magenta,"\n\nListar Produto por Número \n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.magenta,"\n\nAtualizar Produto\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.magenta,"\n\nDeletar Produto\n\n", colors.reset);

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

main ();