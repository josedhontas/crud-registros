import { Router } from "express";
import { Municipio } from "../entity/Municipio";
import { MunicipioController } from "../controller/MunicipioController";

export const routerMunicipio = Router();

const municipioCtrl = new MunicipioController();