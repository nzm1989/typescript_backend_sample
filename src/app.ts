import * as bodyParser from "body-parser";
import express from "express";
import { container } from "./config/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import morgan from "morgan";
import {morganOption} from "./config/morgan.config";

// create server
const server = new InversifyExpressServer(container);
server.setConfig((preBuildApp: express.Application) => {
    // add body parser
    preBuildApp.use(bodyParser.urlencoded({
        extended: true
    }));

    preBuildApp.use(bodyParser.json());

    preBuildApp.use(morgan("combined", morganOption));
});

const app: express.Application = server.build();

export = app;
