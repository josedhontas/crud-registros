import { Router } from "express";
import { Pessoa } from "../entity/Pessoa";
import { PessoaController } from "../controller/PessoaController";
import { EnderecoController } from "../controller/EnderecoController";

export const routerPessoa = Router();
const pessoaCtrl = new PessoaController();
const enderecoCtrl = new EnderecoController();

routerPessoa.post('/',async (req, res) => {
    const {idEnd, nome, idade} = req.body;
    const endereco = await enderecoCtrl.recuperarPorId(idEnd);
    if(endereco){
        const pessoa = new Pessoa(nome, idade, endereco);
        const pessoaSalva = await pessoaCtrl.salvar(pessoa);
        res.json(pessoaSalva);
    }
    else{
        res.status(404).json({mensagem: 'Endereco nao encontrado'});
    }
})

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