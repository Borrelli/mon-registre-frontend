import { IAppState } from "../../src/core/store/root-reducer";
import { ISharedThunkDispatch } from "../../src/core/store/shared/thunk.types";
import mockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialUserState } from "../../src/core/store/user/user.reducer";
import { initialRevenueState } from "../../src/core/store/revenue/revenue.reducer";
import { IAPIPort } from "../../src/core/ports/API.port";

export const configMockStore = (apiClient: IAPIPort) => {
  const createMockStore = mockStore<IAppState, ISharedThunkDispatch<any>>([thunk.withExtraArgument(apiClient)]);

  return createMockStore({ user: initialUserState, revenue: initialRevenueState });
};
