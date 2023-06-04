import { getManager } from "typeorm";
import { Endereco} from "../entity/Endereco";

export class EnderecoController{
    async salvar(endereco: Endereco){
        const enderecoSalvo = await getManager().save(endereco);
        return enderecoSalvo;
    }

    async recuperarPorId(id: number){
        const endereco = await getManager().findOne(Endereco, id);
        return endereco;
    }

    async recuperarPessoaDoEnde(id: number) {
        const endereco = await getManager().findOne(Endereco, id, {
            relations: ['pessoas ']
        })
        return endereco.pessoas

    }

    async editarPorId(id: number, dadosAtualizados: Partial<Endereco>) {
        const endereco = await getManager().findOne(Endereco, id);
        if (!endereco) {
            throw new Error(`Endereco com o ID ${id} não encontrada.`);
        }
        const enderecoAtualizado = Object.assign(endereco, dadosAtualizados);
        const enderecoSalvo = await getManager().save(enderecoAtualizado);
        return enderecoSalvo;
    }

    async apagarPorId(id: number) {
        const endereco = await getManager().findOne(Endereco, id);
        if (!endereco) {
            throw new Error(`Endereco com o ID ${id} não encontrado.`);
        }
        const enderecoRemovido = await getManager().remove(endereco);
        return enderecoRemovido;
    }
}