import { provide } from "inversify-binding-decorators";
import { User } from "../../model/user.model";
import {UserRepository} from "../../repository/main.repository";
import { UserService } from "../user.service";
import { inject } from "inversify";
import {CreateUserDTO} from "../../dto/create.user.dto";
import {JsonConvert} from "json2typescript";
import datasource = require("../../datasource");
import {Transaction} from "sequelize";

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

    /**
     * Create user
     * @param id
     */
    public async createUser(createUserRequest: string): Promise<User | null> {
        return await datasource.transaction(async (transaction: Transaction) => {
            const jsonConvert: JsonConvert = new JsonConvert();
            const createUserDTO: CreateUserDTO = jsonConvert.deserializeObject(createUserRequest, CreateUserDTO);
            return await this.userRepository.createUser(createUserDTO.getUserName, transaction);
        });
    }
}
