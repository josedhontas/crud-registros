import { getManager } from "typeorm";
import { Pessoa } from "../entity/Pessoa";

export class PessoaController{
    async salvar(pessoa: Pessoa){
        const pessoaSalva = await getManager().save(pessoa);
        return pessoaSalva;
    }

    async recuperarPorId(id: number){
        const pessoa = await getManager().findOne(Pessoa, id);
        return pessoa;
    }

    async editarPorId(id: number, dadosAtualizados: Partial<Pessoa>) {
        const pessoa = await getManager().findOne(Pessoa, id);
        if (!pessoa) {
            throw new Error(`Pessoa com o ID ${id} não encontrada.`);
        }
        const pessoaAtualizada = Object.assign(pessoa, dadosAtualizados);
        const pessoaSalva = await getManager().save(pessoaAtualizada);
        return pessoaSalva;
    }

    async apagarPorId(id: number) {
        const pessoa = await getManager().findOne(Pessoa, id);
        if (!pessoa) {
            throw new Error(`Pessoa com o ID ${id} não encontrado.`);
        }
        const pessoaRemovida = await getManager().remove(pessoa);
        return pessoaRemovida;
    }
}