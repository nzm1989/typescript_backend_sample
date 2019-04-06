import {UserRepository} from "../../src/repository/user.repository";
import {User} from "../../src/model/user.model";

describe('Testing User Repository: ', () => {
    const mockUserArray: User[] = new Array(
        new User(),
        new User()
    );
    const mockUser: User = new User();
    const userRepository = new UserRepository();

    test('Testing function getUserData()', async () => {
        const mockGetUserData = jest.spyOn(userRepository, "getUserData");

        mockGetUserData.mockImplementation(() => {
            return new Promise(function(resolve, reject) {
                resolve(mockUserArray);
            })
        });

        await expect(userRepository.getUserData()).resolves.toBeInstanceOf(Array); 
    });

    test('Testing function getUserByID(id)', async () => {
        const mockGetUserDataByID = jest.spyOn(userRepository, "getUserByID");

        mockGetUserDataByID.mockImplementation((id: string) => {
            return new Promise(function(resolve, reject) {
                resolve(mockUser);
            })
        });

        await expect(userRepository.getUserByID("1")).resolves.toBeInstanceOf(User);
        expect(mockGetUserDataByID).toHaveBeenLastCalledWith('1');
    });
});