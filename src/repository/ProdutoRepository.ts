import { Produto } from "../model/Produto";

export interface ProdutoRepository {

	// CRUD 
	procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(conta: Produto): void;
	atualizar(conta: Produto): void;
	deletar(numero: number): void;
	
}
