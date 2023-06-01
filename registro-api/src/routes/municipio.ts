import { Router } from "express";
import { Municipio } from "../entity/Municipio";
import { MunicipioController } from "../controller/MunicipioCOntroller";

export const routerMunicipio = Router();

const municipioCtrl = new MunicipioController();