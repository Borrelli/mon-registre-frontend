import { UserActionTypes } from "./user.types";

export const createUserRequest = (): UserActionTypes => {
  return {
    type: "CREATE_USER_REQUEST",
  };
};

export const createUserSuccess = (): UserActionTypes => {
  return {
    type: "CREATE_USER_SUCCESS",
  };
};

export const createUserFailure = (): UserActionTypes => {
  return {
    type: "CREATE_USER_FAILURE",
  };
};
