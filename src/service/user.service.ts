import { User } from "../model/user.model";

export interface UserService {
    getUserByID(id: string): Promise<User | null>;
    createUser(userNameInput: string): Promise<User | null>;

}
