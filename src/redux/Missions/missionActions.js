import ActionTypes from './action-types';

export const getMissions = (payload) => ({
  type: ActionTypes.GET_MISSIONS,
  payload,
});

export const bookMission = (payload) => ({
  type: ActionTypes.BOOK_MISSION,
  payload,
});
