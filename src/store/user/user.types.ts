import { ISharedThunkAction } from "../shared/thunk.types";
import { IUserDTO } from "../../core/DTO/user.DTO";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

interface ICreateUserRequest {
  type: typeof CREATE_USER_REQUEST;
}

interface ICreateUserSuccess {
  type: typeof CREATE_USER_SUCCESS;
}

interface ICreateUserFailure {
  type: typeof CREATE_USER_FAILURE;
}

export type UserActionTypes = ICreateUserRequest | ICreateUserSuccess | ICreateUserFailure;

export interface IUserState {
  isLoading: boolean;
  err: any;
}

export type CreateUserThunk = ({
  firstname,
  lastname,
  email,
  password,
}: IUserDTO) => ISharedThunkAction<UserActionTypes>;
