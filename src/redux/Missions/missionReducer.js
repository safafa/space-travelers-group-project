import axios from 'axios';
import ActionTypes from './action-types';
import getMissions from './missionActions';

const initialState = [];

const missionsObj = (resp) => resp.map((mission) => ({
  name: mission.mission_name,
  id: mission.mission_id,
  desc: mission.description,
}));

export const fetchMissions = () => async (dispatch) => {
  await axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      dispatch(getMissions(missionsObj(response)));
    });
};

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
