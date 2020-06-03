import { configMockStore } from "./mock/config-mock-store";
import { receiveRevenuesUseCase } from "../src/core/use-cases/revenue.use-case";
import { RECEIVE_REVENUES_REQUEST, RECEIVE_REVENUES_SUCCESS } from "../src/core/store/revenue/revenue.types";
import { InMemoryAPI } from "../src/adapters/API/in-memory.api";

const apiClient = new InMemoryAPI();
const mockStore = configMockStore(apiClient);
const fakeToken = "token";

jest.spyOn(apiClient, "receiveRevenue");
window.localStorage.__proto__.getItem = jest.fn(() => fakeToken);

describe("Revenue use case", () => {
  describe("Receive revenues", () => {
    it("should send credentials to API and set token on local storage", async () => {
      await mockStore.dispatch(receiveRevenuesUseCase());
      const dispatchedActions = mockStore.getActions();

      expect(dispatchedActions[0].type).toEqual(RECEIVE_REVENUES_REQUEST);
      expect(apiClient.receiveRevenue).toBeCalledWith(fakeToken);
      expect(dispatchedActions[1].type).toEqual(RECEIVE_REVENUES_SUCCESS);
      expect(dispatchedActions[1].payload).toEqual(new InMemoryAPI().revenueList);
    });
  });
});
