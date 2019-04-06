import { provide } from "inversify-binding-decorators";
import { User } from "../../model/user.model";
import {UserRepository} from "../../repository/main.repository";
import { UserService } from "../user.service";
import { inject } from "inversify";

@provide(UserServiceImpl)
export class UserServiceImpl implements UserService {

    @inject(UserRepository)
    private userRepository: UserRepository;

    /**
     * Get user by ID
     * @param id
     */
    public async getUserByID(id: string): Promise<User | null> {
        return this.userRepository.getUserByID(id);
    }
}
