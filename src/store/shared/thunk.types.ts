import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { IAppState } from "../root-reducer";
import { IAPIPort } from "../../core/ports/API.port";

export type ISharedThunkDispatch<ActionTypes extends Action<string>> = ThunkDispatch<IAppState, IAPIPort, ActionTypes>;
export type ISharedThunkAction<ActionTypes extends Action<string>> = ThunkAction<
  void,
  IAppState,
  IAPIPort,
  ActionTypes
>;
