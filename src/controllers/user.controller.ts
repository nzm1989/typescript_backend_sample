import { NextFunction, Request, Response, Router} from "express";
import { inject } from "inversify";
import {
	BaseHttpController,
	controller,
	httpGet,
	httpPost, next,
	queryParam,
	request,
	response
} from "inversify-express-utils";
import { UserService } from "../service/user.service";
import {logger} from "../util/logger.util";
import { UserServiceImpl } from "../service/impl/user.service.impl";

@controller("/user")
export class UserController extends BaseHttpController {

	@inject(UserServiceImpl)
	private userService: UserService;

	 /**
	 * @swagger
	 *
	 * /user/getUserByID:
	 *   get:
	 *     description: Get user by id
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         in: query
	 *         schema:
	 *           type: integer
	 *         description: User ID of the user
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: return user data related to the user ID
	 */
	@httpGet("/getUserByID")
	public async getUserByID(@queryParam("id") id: string, @next() nextFunction: NextFunction) {
		try {
			const data = await this.userService.getUserByID(id);
			logger.info(data);
			return data;
		} catch (err) {
			logger.error(err);
			nextFunction(err);
		}
	}

	/**
	 * @swagger
	 *
	 * /user/createUser:
	 *   post:
	 *     description: Create user
	 *     produces:
	 *       - application/json
	 *     requestBody:
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               userName:
	 *                 type: string
	 *         description: User ID of the user
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: return created user data
	 */
	@httpPost("/createUser")
	public async createUser(@request() req: Request, @response() res: Response, @next() nextFunction: NextFunction) {
		try {
			console.log(req.body);
			return await this.userService.createUser(req.body);
		} catch (err) {
			nextFunction(err);
			throw err;
		}
	}
}
