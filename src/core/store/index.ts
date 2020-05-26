import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { RealAPI } from "../../adapters/API/real.api";
import { EnvConfiguration } from "../../configuration/env.configuration";

const APIAdapter = new RealAPI(EnvConfiguration.API_URL);

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(APIAdapter)),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose
  )
);
