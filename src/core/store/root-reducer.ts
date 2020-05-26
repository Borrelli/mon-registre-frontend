import { Reducer, combineReducers } from "redux";
import { IRevenueState } from "./revenue/revenue.types";
import { revenueReducer } from "./revenue/revenue.reducer";

export interface IAppState {
  revenue: IRevenueState;
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  revenue: revenueReducer,
} as any);
