import { getManager } from "typeorm";
import { Uf } from "../entity/Uf";

export class UfController{
    async salvar(uf: Uf){
        const ufSalva = await getManager().save(uf);
        return ufSalva;
    }

    async recuperarTodas(){
        const ufs = await getManager().find(Uf);
        return ufs;
    }

    async recuperarPorId(id: number){
        const uf = await getManager().findOne(Uf, id);
        return uf;
    }
}