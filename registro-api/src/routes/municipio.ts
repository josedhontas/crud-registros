import { Router } from "express";
import { Municipio } from "../entity/Municipio";
import { MunicipioController } from "../controller/MunicipioController";
import { UfController } from "../controller/UfController";

export const routerMunicipio = Router();
const municipioCtrl = new MunicipioController();
const ufCtrl = new UfController();

routerMunicipio.post('/',async (req, res) => {
    const {idUf, nome, status} = req.body;
    const uf = await ufCtrl.recuperarPorId(idUf);
    if(uf){
        const municipio = new Municipio(nome, status, uf);
        const municipioSalvo = await municipioCtrl.salvar(municipio);
        res.json(municipioSalvo);
    }
    else{
        res.status(404).json({mensagem: 'Uf nao encontrada'});
    }
})

routerMunicipio.get('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const municipio = await municipioCtrl.recuperarPorId(id)
    res.json(municipio);
    
})

routerMunicipio.get('/bairros/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const bairros = await municipioCtrl.recuperarBairroDoMuni(id)
    res.json(bairros);
    
})

routerMunicipio.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const dadosMunicipio = req.body;
    try {
        const municipioAtualizado = await municipioCtrl.editarPorId(id, dadosMunicipio);
        res.json(municipioAtualizado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


routerMunicipio.delete('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const municipio = await municipioCtrl.apagarPorId(id)
    res.json(municipio);
    
})