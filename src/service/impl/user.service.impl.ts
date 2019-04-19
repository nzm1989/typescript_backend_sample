import { provide } from "inversify-binding-decorators";
import { User } from "../../model/user.model";
import {UserRepository} from "../../repository/user.repository";
import { UserService } from "../user.service";
import { inject } from "inversify";
import {CreateUserDTO} from "../../dto/user/create.user.dto";
import datasource = require("../../datasource");
import {Transaction} from "sequelize";
import {convertJsonToDTO} from "../../util/json.to.dto.converter.util.js";

@provide(UserServiceImpl)
export class UserServiceImpl implements UserService {

    @inject(UserRepository)
    private userRepository: UserRepository;

    /**
     * Get user by ID
     * @param id
     */
    public async getUserByID(id: string): Promise<User | null> {
        return await this.userRepository.getUserByID(id);
    }

    /**
     * Create user
     * @param id
     */
    public async createUser(createUserRequest: string): Promise<User | null> {
        return await datasource.transaction(async (transaction: Transaction) => {
            const createUserDTO: CreateUserDTO = convertJsonToDTO(createUserRequest, CreateUserDTO);
            return await this.userRepository.createUser(createUserDTO.getUserName, transaction);
        });
    }
}
