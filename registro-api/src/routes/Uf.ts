import { Router } from "express";
import { UfController } from "../controller/UfController";
import { Uf } from "../entity/Uf";

export const routerUf = Router();

const ufCtrl = new UfController();

routerUf.post('/', async (req, res) => {

})

routerUf.get('/',async (req,res) => {
    const uf = await ufCtrl.recuperarTodas();
    res.json(uf); 
})