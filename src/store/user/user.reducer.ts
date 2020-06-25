import { IUserState, UserActionTypes } from "./user.types";

export const initialUserState: IUserState = {
  isLoading: false,
  err: "",
};

export const userReducer = (state = initialUserState, action: UserActionTypes): IUserState => {
  switch (action.type) {
    case "CREATE_USER_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CREATE_USER_SUCCESS": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "CREATE_USER_FAILURE": {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
