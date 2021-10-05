import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import rocketsReducer from './Rockets/rockets';

const reducer = combineReducers({
  missionsReducer,
  rocketsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
