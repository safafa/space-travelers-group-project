import ActionTypes from './action-types';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_MISSIONS:
      return { ...state, missions: payload };
    default:
      return state;
  }
};
export default missionReducer;
