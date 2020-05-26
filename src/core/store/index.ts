import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { InMemoryAPI } from "../../adapters/API/in-memory.api";

const APIAdapter = new InMemoryAPI();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(APIAdapter)),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose
  )
);
