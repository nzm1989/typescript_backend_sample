import { provide } from "inversify-binding-decorators";
import datasource from "../datasource";
import {User} from "../model/user.model";
import { Transaction } from "sequelize/types";

// import {logger} from "../utils/logger.util";

datasource.addModels([User]);

@provide(UserRepository)
export class UserRepository {
	public async getUserData(): Promise<User[]> {
		return datasource.transaction((t) => {
			return User.findAll();
		});
	}

	public async getUserByID(id: string): Promise<User | null> {
		// return datasource.transaction((t) => {
			return User.findOne({
				where: {
					userSystemNumber: id
				}
			});
		// })
	}
}
