import { User } from "../model/user.model";

export interface UserService {
    getUserbyID(id: string): Promise<User | null>;
}
