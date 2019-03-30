import {Options} from "morgan";
import {logger} from "./winston.config";

export const morganOption: Options = {
	stream: {
		write(message: string) {
			logger.info(message.trim());
		},
	},
};
