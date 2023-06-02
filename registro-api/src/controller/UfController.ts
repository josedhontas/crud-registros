import { getManager } from "typeorm";
import { Uf } from "../entity/Uf";

export class UfController {
    async salvar(uf: Uf) {
        const ufSalva = await getManager().save(uf);
        return ufSalva;
    }

    async recuperarTodas() {
        const ufs = await getManager().find(Uf);
        return ufs;
    }

    async recuperarPorId(id: number) {
        const uf = await getManager().findOne(Uf, id);
        return uf;
    }

    async recuperarMunicipioDaUf(id: number){
        const uf = await getManager().findOne(Uf, id, {
            relations:['municipios']
        })
        return uf.municipios

    }

    async editarPorId(id: number, dadosAtualizados: Partial<Uf>) {
        const uf = await getManager().findOne(Uf, id);
        if (!uf) {
            throw new Error(`UF com o ID ${id} não encontrada.`);
        }
        const ufAtualizada = Object.assign(uf, dadosAtualizados);
        const ufSalva = await getManager().save(ufAtualizada);
        return ufSalva;
    }

    async apagarPorId(id: number) {
        const uf = await getManager().findOne(Uf, id);
        if (!uf) {
            throw new Error(`UF com o ID ${id} não encontrada.`);
        }
        const ufRemovida = await getManager().remove(uf);
        return ufRemovida;
    }
}
