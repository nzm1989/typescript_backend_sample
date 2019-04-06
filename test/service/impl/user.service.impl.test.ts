import {User} from "../../../src/model/user.model"
import {UserServiceImpl} from "../../../src/service/impl/user.service.impl";

describe('Testing User Service: ', () => {

    const mockUser: User = new User();
    const userService = new UserServiceImpl();

    test('Testing function getUserbyID(id)', async () => {
        const mockGetUserDataByID = jest.spyOn(userService, "getUserByID");

        mockGetUserDataByID.mockImplementation(() => {
            return new Promise(function(resolve, reject) {
                resolve(mockUser);
            })
        });

        await expect(userService.getUserByID("1")).resolves.toBeInstanceOf(User);
        expect(mockGetUserDataByID).toHaveBeenLastCalledWith('1');
    });

});
