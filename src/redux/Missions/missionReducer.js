import axios from 'axios';
import ActionTypes from './action-types';
import { getMissions } from './missionActions';

export const fetchMissions = () => async (dispatch) => {
  await axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const missions = response.data.map((mission) => ({
        name: mission.mission_name,
        id: mission.mission_id,
        desc: mission.description,
      }));

      dispatch(getMissions(missions));
    });
};

export const bookMission = (state, id) => (dispatch) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) return mission;
    return { ...mission, reserved: !mission.reserved };
  });
  dispatch({ type: ActionTypes.BOOK_MISSION, newState });
};

const missionReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_MISSIONS:
      return [...payload];
    case ActionTypes.BOOK_MISSION:
      return action.newState;
    default:
      return state;
  }
};
export default missionReducer;
