import { ReceiveRevenues, CreateRevenue } from "./revenue.types";
import { IRevenue } from "../../core/entities/revenue.entity";

export const receiveRevenuesRequest = (): ReceiveRevenues => {
  return {
    type: "RECEIVE_REVENUES_REQUEST",
  };
};

export const receiveRevenuesSuccess = (data: IRevenue[]): ReceiveRevenues => {
  return {
    type: "RECEIVE_REVENUES_SUCCESS",
    payload: data,
  };
};

export const receiveRevenuesFailure = (): ReceiveRevenues => {
  return {
    type: "RECEIVE_REVENUES_FAILURE",
  };
};

export const createRevenueRequest = (): CreateRevenue => {
  return {
    type: "CREATE_REVENUE_REQUEST",
  };
};

export const createRevenueSuccess = (): CreateRevenue => {
  return {
    type: "CREATE_REVENUE_SUCCESS",
  };
};

export const createRevenueFailure = (): CreateRevenue => {
  return {
    type: "CREATE_REVENUE_FAILURE",
  };
};
