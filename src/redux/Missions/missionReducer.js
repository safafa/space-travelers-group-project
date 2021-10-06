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

const missionReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_MISSIONS:
      return [...payload];
    case ActionTypes.BOOK_MISSION: {
      // eslint-disable-next-line max-len
      return state.map((mission) => (mission.mission_id !== payload.id ? mission : { ...mission, reserved: !mission.reserved }));
    }
    default:
      return state;
  }
};
export default missionReducer;
