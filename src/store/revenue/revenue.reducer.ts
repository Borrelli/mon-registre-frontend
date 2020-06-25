import { IRevenueState, RevenueActionTypes } from "./revenue.types";

export const initialRevenueState: IRevenueState = {
  isLoading: false,
  err: "",
  revenues: [],
};

export const revenueReducer = (state = initialRevenueState, action: RevenueActionTypes): IRevenueState => {
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
    case "CREATE_REVENUE_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CREATE_REVENUE_SUCCESS": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "CREATE_REVENUE_FAILURE": {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
