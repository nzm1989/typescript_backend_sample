import * as app from "./app";
import { logger } from "./util/logger.util";

app.listen(3000);

logger.info("Server listening to port 3000");
