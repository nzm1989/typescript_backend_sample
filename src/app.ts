import * as bodyParser from "body-parser";
import express, { NextFunction, Request, Response} from "express";
import { container } from "./config/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import morgan from "morgan";
import {morganOption} from "./config/morgan.config";
import {logger} from "./config/winston.config";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import {swaggerJsDocConfig} from "./config/swagger.jsdoc.config";
import methodOverride from "method-override";

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(swaggerJsDocConfig);

// create server
const server = new InversifyExpressServer(container);
server.setConfig((preBuildApp: express.Application) => {
    // add body parser
    preBuildApp.use(bodyParser.urlencoded({
        extended: true
    }));

    preBuildApp.use(bodyParser.json());
    preBuildApp.use(methodOverride());
    // add api docs for testing
    preBuildApp.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    preBuildApp.use(morgan("combined", morganOption));
}).setErrorConfig((preBuildApp: express.Application) => {
    preBuildApp.use( (err: any, req: Request, res: Response, next: NextFunction) => {
        logger.error(err.stack);
        res.status(500);
        res.send({message: "Error from server. Please contact system administrator."});
        next();
    });
}).build().listen(3000);

logger.info("Server listening to port 3000");

export = server;
