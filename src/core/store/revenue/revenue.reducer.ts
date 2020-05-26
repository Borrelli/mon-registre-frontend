import { IRevenueState, RevenueActionTypes } from "./revenue.types";

const initialState: IRevenueState = {
  isLoading: false,
  err: "",
  revenues: [],
};

export const revenueReducer = (state = initialState, action: RevenueActionTypes): IRevenueState => {
  switch (action.type) {
    case "RECEIVE_REVENUES_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "RECEIVE_REVENUES_SUCCESS": {
      const revenues = action.payload;
      return {
        ...state,
        isLoading: false,
        revenues,
      };
    }
    case "RECEIVE_REVENUES_FAILURE": {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
