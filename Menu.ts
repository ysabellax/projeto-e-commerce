import leia from "readline-sync";
import { colors } from './src/util/Colors';


export function main() {

    let opcao;
    

    while (true) {
        console.log(colors.fg.magenta + 
                    "♡===================================================♡", colors.reset);
        console.log("                                                     ");
        console.log(colors.fg.cyan + "                ♡  BELLA TOYS  ♡                   ", colors.reset);
        console.log("                                                     ");
        console.log(colors.fg.magenta + "♡===================================================♡", colors.reset);
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
        console.log("Projeto Desenvolvido por: Ysabella Santos ");
        console.log("Ysabella Santos - ysabella3909@gmail.com");
        console.log("...");
        console.log(colors.fg.magenta +"♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡\n", colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...\n");
    leia.prompt();
}

main ();