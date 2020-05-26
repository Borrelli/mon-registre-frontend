import { Reducer, combineReducers } from "redux";
import { IRevenueState } from "./revenue/revenue.types";
import { revenueReducer } from "./revenue/revenue.reducer";
import { IUserState } from "./user/user.types";
import { userReducer } from "./user/user.reducer";

export interface IAppState {
  revenue: IRevenueState;
  user: IUserState;
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  revenue: revenueReducer,
  user: userReducer,
} as any);
