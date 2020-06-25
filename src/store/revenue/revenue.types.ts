import { IRevenue } from "../../core/entities/revenue.entity";
import { IRevenueDTO } from "../../core/DTO/revenue.DTO";
import { ISharedThunkAction } from "../shared/thunk.types";

export const RECEIVE_REVENUES_REQUEST = "RECEIVE_REVENUES_REQUEST";
export const RECEIVE_REVENUES_SUCCESS = "RECEIVE_REVENUES_SUCCESS";
export const RECEIVE_REVENUES_FAILURE = "RECEIVE_REVENUES_FAILURE";
export const CREATE_REVENUE_REQUEST = "CREATE_REVENUE_REQUEST";
export const CREATE_REVENUE_SUCCESS = "CREATE_REVENUE_SUCCESS";
export const CREATE_REVENUE_FAILURE = "CREATE_REVENUE_FAILURE";

interface IReceiveRevenuesRequest {
  type: typeof RECEIVE_REVENUES_REQUEST;
}

interface IReceiveRevenuesSuccess {
  type: typeof RECEIVE_REVENUES_SUCCESS;
  payload: IRevenue[];
}

interface IReceiveRevenuesFailure {
  type: typeof RECEIVE_REVENUES_FAILURE;
}

interface ICreateRevenueRequest {
  type: typeof CREATE_REVENUE_REQUEST;
}

interface ICreateRevenueSuccess {
  type: typeof CREATE_REVENUE_SUCCESS;
}

interface ICreateRevenueFailure {
  type: typeof CREATE_REVENUE_FAILURE;
}

export type ReceiveRevenues = IReceiveRevenuesRequest | IReceiveRevenuesSuccess | IReceiveRevenuesFailure;
export type CreateRevenue = ICreateRevenueRequest | ICreateRevenueSuccess | ICreateRevenueFailure;
export type RevenueActionTypes = ReceiveRevenues | CreateRevenue;

export interface IRevenueState {
  isLoading: boolean;
  err: any;
  revenues: IRevenue[];
}

export type ReceiveRevenuesThunk = () => ISharedThunkAction<ReceiveRevenues>;
export type CreateRevenueThunk = (revenue: IRevenueDTO) => ISharedThunkAction<CreateRevenue>;
