import { provide, buildProviderModule } from "inversify-binding-decorators";
import { User } from "../../model/user.model";
import {UserRepository} from "../../repository/main.repository";
import { UserService } from "../user.service";
import { inject } from "inversify";

@provide(UserServiceImpl)
export class UserServiceImpl implements UserService {

    @inject(UserRepository)
    private userRepository: UserRepository;

    public async getUserbyID(id: string): Promise<User | null> {
        return this.userRepository.getUserByID(id);
    }
}
