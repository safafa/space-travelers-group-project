import ActionTypes from './action-types';

// eslint-disable-next-line import/prefer-default-export
export const getMissions = (payload) => ({
  type: ActionTypes.GET_MISSIONS,
  payload,
});
