import rootReducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import simple from './reducers'
import {loadState, saveState} from './localStorage'
import {countriesLoaded, fetchRemoteDatas} from './reducers/actions'

const persistedState = loadState();
const store = createStore(
  simple,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name'
async function countriesLoadedCB() {
  let response = await fetch(countriesUrl)
  return await response.json()
}
async function dataLoaded() {
  let c = await countriesLoadedCB();
  store.dispatch({type: 'FETCHED', payload: {countries: c}})
}
store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts,
    currentSelected: store.getState().currentSelected,
    countries: store.getState().countries
  });
});
if (persistedState === undefined ||
  persistedState.countries === undefined ||
  !persistedState.countries.length
) {
  store.dispatch({type: 'FETCHINGDATAS'})
  dataLoaded()
}
window.store = store
export default store;