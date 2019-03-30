import winston from "winston";

// define the custom settings for each transport (file, console)
const options = {
	console: {
		colorize: true,
		handleExceptions: true,
		json: false,
		level: "debug",
	},
	file: {
		colorize: false,
		filename: __dirname + "/../logs/app.log",
		handleExceptions: true,
		json: true,
		level: "info",
		maxFiles: 5,
		maxsize: 5242880, // 5MB
	},
};

// instantiate a new Winston Logger with the settings defined above
export const logger = winston.createLogger({
	exitOnError: false, // do not exit on handled exceptions
	transports: [
		new winston.transports.File(options.file),
		new winston.transports.Console(options.console)
	],
});
