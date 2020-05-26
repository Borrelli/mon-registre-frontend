import { Reducer, combineReducers } from "redux";

export interface IAppState {}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({} as any);
