import { Router } from "express";
import { UfController } from "../controller/UfController";
import { Uf } from "../entity/Uf";

export const routerUf = Router();

const ufCtrl = new UfController();

routerUf.post('/', async (req, res) => {
    const { sigla, nome, status } = req.body;
    const uf = new Uf(sigla, nome, status);
    const ufSalva = await ufCtrl.salvar(uf);
    res.json(ufSalva);

})

routerUf.get('/', async (req, res) => {
    const uf = await ufCtrl.recuperarTodas();
    res.json(uf);
})

/*routerUsuario.get('/lancamentos/:idUsuario',async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtrl.recuperarLancamentoDoUsuario(idUsuario);
    res.json(lancamentos);
    
*/

routerUf.get('/municipios/:idUf',async (req, res) => {
    const idUf = parseInt(req.params.idUf);
    const municipios = await ufCtrl.recuperarMunicipioDaUf(idUf)
    res.json(municipios);
    
})

routerUf.put('/:idUf', async (req, res) => {
    const idUf = parseInt(req.params.idUf);
    const dadosUf = req.body;
    try {
        const ufAtualizada = await ufCtrl.editarPorId(idUf, dadosUf);
        res.json(ufAtualizada);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

routerUf.delete('/:idUf', async (req, res) => {
    const idUf = parseInt(req.params.idUf);
    const uf = await ufCtrl.apagarPorId(idUf);
    res.json(uf);
})