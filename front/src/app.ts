import express from "express";
import config from './config';
import morgan  from "morgan";
import cors  from "cors";

import maintenanceRoutes from './routes/maintenance.routes';


    const app = express()

    app.set('port',config.APP_PORT);

    app.use(cors());

    app.use(express.json());

    app.use(express.urlencoded({extended:false}));

    app.use(morgan('dev'));

    app.use(maintenanceRoutes);


export default app;