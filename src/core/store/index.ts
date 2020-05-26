import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { InMemoryRepository } from "../../adapters/repositories/in-memory.repository";

const apiClient = new InMemoryRepository();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(apiClient)),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose
  )
);
