import rootReducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import simple from './reducers'

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger)
);

const store = createStore(simple, null, enhancer);
window.store = store

export default createStore(rootReducer);