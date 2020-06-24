import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';

const middleware = [reduxThunk];

export const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));