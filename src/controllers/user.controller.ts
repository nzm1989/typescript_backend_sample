import { NextFunction, Request, Response, Router} from "express";
import { inject } from "inversify";
import { BaseHttpController, controller, httpGet} from "inversify-express-utils";
import { UserService } from "../service/user.service";
import {logger} from "../util/logger.util";
import { UserServiceImpl } from "../service/impl/user.service.impl";

@controller("/user")
export class UserController extends BaseHttpController {

	@inject(UserServiceImpl)
	private userService: UserService;

	@httpGet("/getUserByID")
	public async getUserByID(req: Request, res: Response, next: NextFunction) {
		try {
			const data = await this.userService.getUserByID(req.query.id);
			logger.info(data);
			res.json(data);
		} catch (err) {
			logger.error(err);
			next(err);
		}
	}
}
