import { ReceiveRevenuesThunk } from "../store/revenue/revenue.types";
import {
  receiveRevenuesFailure,
  receiveRevenuesSuccess,
  receiveRevenuesRequest,
} from "../store/revenue/revenue.actions";

export const receiveRevenuesUseCase: ReceiveRevenuesThunk = () => async (dispatch, getState, API) => {
  try {
    dispatch(receiveRevenuesRequest());
    const userToken = localStorage.getItem("token")!;
    const response = await API.receiveRevenue(userToken);
    dispatch(receiveRevenuesSuccess(response.data));
  } catch (err) {
    dispatch(receiveRevenuesFailure());
  }
};
