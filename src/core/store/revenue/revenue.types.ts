import { IRevenue } from "../../entities/revenue.entity";
import { ISharedThunkAction } from "../shared/thunk.types";

export const RECEIVE_REVENUES_REQUEST = "RECEIVE_REVENUES_REQUEST";
export const RECEIVE_REVENUES_SUCCESS = "RECEIVE_REVENUES_SUCCESS";
export const RECEIVE_REVENUES_FAILURE = "RECEIVE_REVENUES_FAILURE";

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

export type RevenueActionTypes = IReceiveRevenuesRequest | IReceiveRevenuesSuccess | IReceiveRevenuesFailure;

export interface IRevenueState {
  isLoading: boolean;
  err: any;
  revenues: IRevenue[];
}

export type ReceiveRevenuesThunk = () => ISharedThunkAction<RevenueActionTypes>;
