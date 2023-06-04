import { Router } from "express";
import { Endereco } from "../entity/Endereco";
import { EnderecoController } from "../controller/EnderecoController";
import { BairroController } from "../controller/BairroContrroller";

export const routerEndereco = Router();
const enderecoCtrl = new EnderecoController();
const bairroCtrl = new BairroController();

routerEndereco.post('/',async (req, res) => {
    const {idBairro, logradouro, numero} = req.body;
    const bairro = await bairroCtrl.recuperarPorId(idBairro);
    if(bairro){
        const endereco = new Endereco(logradouro, numero, bairro);
        const enderecoSalvo = await enderecoCtrl.salvar(endereco);
        res.json(enderecoSalvo);
    }
    else{
        res.status(404).json({mensagem: 'Bairro nao encontrado'});
    }
})

routerEndereco.get('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const endereco = await enderecoCtrl.recuperarPorId(id)
    res.json(endereco);
    
})

routerEndereco.get('/pessoas/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const pessoas = await enderecoCtrl.recuperarPessoaDoEnde(id)
    res.json(pessoas);
    
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