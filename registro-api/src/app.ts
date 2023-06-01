import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerUf} from './routes/Uf';
import { routerMunicipio} from './routes/municipio';


export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

conectarServidorNoBD();
app.use('/uf', routerUf);
app.use('/municipio', routerMunicipio);
