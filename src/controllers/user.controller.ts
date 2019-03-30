import express from "express";
import {userRepository} from "../repositories/main.repository";
import {logger} from "../utils/logger.util";

export const userController = express.Router();

userController.get("/user",  async (req: any, res: any, next: any) => {
	try {
		const data = await userRepository.getUserData();
		logger.info(data);
		res.json(data);
	} catch (err) {
		logger.error(err);
		next(err);
	}
});
