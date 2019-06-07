import rootReducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import simple from './reducers'
import {loadState, saveState} from './localStorage'

// const logger = createLogger();

// const enhancer = compose(
//   applyMiddleware(logger)
// );



const persistedState = loadState();
const store = createStore(
  simple,
  persistedState
);

store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts
  });
});

window.store = store

export default store;