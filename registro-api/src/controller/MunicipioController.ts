import { getManager } from "typeorm";
import { Municipio } from "../entity/Municipio";

export class MunicipioController {
    async salvar(municipio: Municipio) {
        const ufSalva = await getManager().save(municipio);
        return ufSalva;
    }

    async recuperarPorId(id: number) {
        const municipio = await getManager().findOne(Municipio, id);
        return municipio;
    }

    async editarPorId(id: number, dadosAtualizados: Partial<Municipio>) {
        const municipio = await getManager().findOne(Municipio, id);
        if (!municipio) {
            throw new Error(`UF com o ID ${id} não encontrada.`);
        }
        const municipioAtualizado = Object.assign(municipio, dadosAtualizados);
        const ufSalva = await getManager().save(municipioAtualizado);
        return ufSalva;
    }

    async apagarPorId(id: number) {
        const municipio = await getManager().findOne(Municipio, id);
        if (!municipio) {
            throw new Error(`UF com o ID ${id} não encontrada.`);
        }
        const municipioRemovido = await getManager().remove(municipio);
        return municipioRemovido;
    }
}
