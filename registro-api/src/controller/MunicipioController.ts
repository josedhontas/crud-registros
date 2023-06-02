import { getManager } from "typeorm";
import { Municipio } from "../entity/Municipio";

export class MunicipioController {
    async salvar(municipio: Municipio) {
        const municipioSalvo = await getManager().save(municipio);
        return municipioSalvo;
    }

    async recuperarPorId(id: number) {
        const municipio = await getManager().findOne(Municipio, id);
        return municipio;
    }

    async editarPorId(id: number, dadosAtualizados: Partial<Municipio>) {
        const municipio = await getManager().findOne(Municipio, id);
        if (!municipio) {
            throw new Error(`Municipio com o ID ${id} não encontrada.`);
        }
        const municipioAtualizado = Object.assign(municipio, dadosAtualizados);
        const ufSalva = await getManager().save(municipioAtualizado);
        return ufSalva;
    }

    async apagarPorId(id: number) {
        const municipio = await getManager().findOne(Municipio, id);
        if (!municipio) {
            throw new Error(`Municipio com o ID ${id} não encontrado.`);
        }
        const municipioRemovido = await getManager().remove(municipio);
        return municipioRemovido;
    }
}
