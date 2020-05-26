import { RevenueActionTypes } from "./revenue.types";
import { IRevenue } from "../../entities/revenue.entity";

export const receiveRevenuesRequest = (): RevenueActionTypes => {
  return {
    type: "RECEIVE_REVENUES_REQUEST",
  };
};

export const receiveRevenuesSuccess = (data: IRevenue[]): RevenueActionTypes => {
  return {
    type: "RECEIVE_REVENUES_SUCCESS",
    payload: data,
  };
};

export const receiveRevenuesFailure = (): RevenueActionTypes => {
  return {
    type: "RECEIVE_REVENUES_FAILURE",
  };
};
