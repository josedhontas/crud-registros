import { Router } from "express";
import { Pessoa } from "../entity/Pessoa";
import { PessoaController } from "../controller/PessoaController";

export const routerPessoa = Router();
const pessoaCtrl = new PessoaController();

routerPessoa.get('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = await pessoaCtrl.recuperarPorId(id)
    res.json(pessoa);
    
})

routerPessoa.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const dadosPessoa = req.body;
    try {
        const pessoaAtualizada = await pessoaCtrl.editarPorId(id, dadosPessoa);
        res.json(pessoaAtualizada);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


routerPessoa.delete('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = await pessoaCtrl.apagarPorId(id)
    res.json(pessoa);
    
})