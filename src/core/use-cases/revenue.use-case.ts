import { ReceiveRevenuesThunk, CreateRevenueThunk } from "../store/revenue/revenue.types";
import {
  receiveRevenuesFailure,
  receiveRevenuesSuccess,
  receiveRevenuesRequest,
  createRevenueRequest,
  createRevenueSuccess,
  createRevenueFailure,
} from "../store/revenue/revenue.actions";

export const receiveRevenuesUseCase: ReceiveRevenuesThunk = () => async (dispatch, getState, API) => {
  try {
    dispatch(receiveRevenuesRequest());
    const userToken = localStorage.getItem("userToken")!;
    const response = await API.receiveRevenue(userToken);
    dispatch(receiveRevenuesSuccess(response.data));
  } catch (err) {
    dispatch(receiveRevenuesFailure());
  }
};

export const createRevenueUseCase: CreateRevenueThunk = (revenue) => async (dispatch, getState, API) => {
  try {
    dispatch(createRevenueRequest());
    const userToken = localStorage.getItem("userToken")!;
    await API.createRevenue(userToken, revenue);
    dispatch(createRevenueSuccess());
  } catch (err) {
    dispatch(createRevenueFailure());
  }
};
