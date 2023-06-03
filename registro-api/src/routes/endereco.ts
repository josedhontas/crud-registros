import { Router } from "express";
import { Endereco } from "../entity/Endereco";
import { EnderecoController } from "../controller/EnderecoController";

export const routerEndereco = Router();
const enderecoCtrl = new EnderecoController();

routerEndereco.get('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const endereco = await enderecoCtrl.recuperarPorId(id)
    res.json(endereco);
    
})

routerEndereco.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const dadosEndereco = req.body;
    try {
        const enderecoAtualizado = await enderecoCtrl.editarPorId(id, dadosEndereco);
        res.json(enderecoAtualizado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


routerEndereco.delete('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const municipio = await enderecoCtrl.apagarPorId(id)
    res.json(municipio);
    
})