import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk'

import reducer from './reducers';

const middleware = applyMiddleware(promise, ReduxThunk);

export default createStore(reducer, composeWithDevTools(middleware));
