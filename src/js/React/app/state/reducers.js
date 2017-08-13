//Here all we need is the combineReducers function to combine our reducers so we can export them to our store
import { combineReducers } from 'redux';

import * as reducer from './ducks';

const rootReducer = combineReducers({
    reducer,
});

export default rootReducer;
