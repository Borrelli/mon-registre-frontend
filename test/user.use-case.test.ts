import { createUserUseCase } from "../src/core/use-cases/user.use-case";
import { IUserDTO } from "../src/core/DTO/user.DTO";
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from "../src/store/user/user.types";
import { configMockStore } from "./mock/config-mock-store";
import { InMemoryAPI } from "../src/adapters/API/in-memory.api";

const apiClient = new InMemoryAPI();
const mockStore = configMockStore(apiClient);

jest.spyOn(apiClient, "createUser");
jest.spyOn(window.localStorage.__proto__, "setItem");

describe("User use case", () => {
  describe("Create user", () => {
    it("should send credentials to API and set token on local storage", async () => {
      const userDTO: IUserDTO = {
        email: "email",
        firstname: "firstname",
        lastname: "lastname",
        password: "password",
      };

      await mockStore.dispatch(createUserUseCase(userDTO));
      const dispatchedActions = mockStore.getActions();

      expect(dispatchedActions[0].type).toEqual(CREATE_USER_REQUEST);
      expect(apiClient.createUser).toBeCalledWith(userDTO.firstname, userDTO.lastname, userDTO.email, userDTO.password);
      expect(localStorage.setItem).toBeCalledWith("userToken", "token");
      expect(dispatchedActions[1].type).toEqual(CREATE_USER_SUCCESS);
    });
  });
});
