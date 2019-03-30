import datasource from "../datasource";
import {User} from "../models/user.model";
// import {logger} from "../utils/logger.util";

datasource.addModels([User]);

export async function getUserData() {
	return datasource.transaction((t) => {
		return User.findAll();
	});
}
