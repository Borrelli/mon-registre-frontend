import { CreateUserThunk } from "../../store/user/user.types";
import { createUserFailure, createUserSuccess, createUserRequest } from "../../store/user/user.actions";

export const createUserUseCase: CreateUserThunk = ({ firstname, lastname, email, password }) => async (
  dispatch,
  getState,
  API
) => {
  try {
    dispatch(createUserRequest());
    const reponse = await API.createUser(firstname, lastname, email, password);
    localStorage.setItem("userToken", JSON.stringify(reponse.data).replace(/['"]+/g, ""));
    dispatch(createUserSuccess());
  } catch (err) {
    dispatch(createUserFailure());
  }
};
