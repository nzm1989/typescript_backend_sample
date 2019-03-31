import { Container } from "inversify";
import "reflect-metadata";
import "../controllers/main.controller";
import { buildProviderModule } from "inversify-binding-decorators";

// set up container
const container = new Container();

container.load(buildProviderModule());

export {container};
