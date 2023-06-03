import { Router } from "express";
import { BairroController } from "../controller/BairroContrroller";
import { MunicipioController } from "../controller/MunicipioController";
import { Bairro } from "../entity/Bairro";

export const routerBairro = Router();
const bairroCtrl = new BairroController();
const municipioCtrl = new MunicipioController;

routerBairro.post('/',async (req, res) => {
    const {idMuni, nome, status} = req.body;
    const municipio = await municipioCtrl.recuperarPorId(idMuni);
    if(municipio){
        const bairro = new Bairro(nome, status, municipio);
        const bairroSalvo = await bairroCtrl.salvar(bairro);
        res.json(bairroSalvo);
    }
    else{
        res.status(404).json({mensagem: 'Municipio nao encontrado'});
    }
})

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

