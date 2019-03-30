import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import path from "path";
// import indexRouter from "./controller/index";
import {morganOption} from "./config/morgan.config";
import mainController from "./controllers/main.controller";
import { logger } from "./utils/logger.util";
// import {logger} from "./modules";

const app = express();

app.listen(3000);

app.use(morgan("combined", morganOption));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
app.use("/users", mainController.userController);

logger.info("Application listening to port 3000");
module.exports = app;
