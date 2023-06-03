import { getManager } from "typeorm";
import { Bairro } from "../entity/Bairro";

export class BairroController{
    async salvar(bairro: Bairro){
        const bairoSalvo = await getManager().save(bairro);
        return bairoSalvo;
    }

    async recuperarPorId(id: number){
        const bairro = await getManager().findOne(Bairro, id);
        return bairro;
    }

    async editarPorId(id: number, dadosAtualizados: Partial<Bairro>) {
        const bairro = await getManager().findOne(Bairro, id);
        if(!bairro){
            throw new Error(`Bairro com o ID ${id} não encontrado.`);
        }
        const bairroAtualizado = Object.assign(bairro, dadosAtualizados);
        const bairoSalvo = await getManager().save(bairroAtualizado);
        return bairoSalvo;
    }
    async apagarPorId(id: number) {
        const bairro = await getManager().findOne(Bairro, id);
        if (!bairro) {
            throw new Error(`Municipio com o ID ${id} não encontrado.`);
        }
        const bairroRemovido = await getManager().remove(bairro);
        return bairroRemovido;
    }
}