import axios from 'axios';
import ActionTypes from './action-types';
import getMissions from './missionActions';

const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  await axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const missions = response.data.map((mission) => ({
        name: mission.mission_name,
        id: mission.mission_id,
        desc: mission.description,
      }));
      console.log('missions', missions);
      dispatch(getMissions(missions));
    });
};

const missionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_MISSIONS:
      return [...payload];
    default:
      return state;
  }
};
export default missionReducer;
