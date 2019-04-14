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

	public async createUser(userNameInput: string, onGoingTransaction: Transaction): Promise<User | null> {
		const user = User.build({userName: userNameInput});
		return user.save({
			transaction: onGoingTransaction
		});
	}
}
