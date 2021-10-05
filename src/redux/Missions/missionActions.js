import ActionTypes from './action-types';

const getMissions = (missions) => ({
  type: ActionTypes.GET_MISSIONS,
  payload: missions,
});
export default getMissions;
