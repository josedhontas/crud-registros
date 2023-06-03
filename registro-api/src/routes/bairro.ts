import { Router } from "express";
import { Bairro } from "../entity/Bairro";
import { BairroController } from "../controller/BairroContrroller";

export const routerBairro = Router()
const bairroCtrl = new BairroController();


routerBairro.get('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const bairro = await bairroCtrl.recuperarPorId(id)
    res.json(bairro);
})

routerBairro.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const dadosBairro = req.body;
    try {
        const bairroAtualizado = await bairroCtrl.editarPorId(id, dadosBairro);
        res.json(bairroAtualizado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

routerBairro.delete('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const bairro = await bairroCtrl.apagarPorId(id)
    res.json(bairro);
    
})

