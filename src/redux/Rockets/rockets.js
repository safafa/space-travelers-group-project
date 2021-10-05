import axios from 'axios';

const GET_ROCKETS = 'spacex/rockets/GET_BOOK';

const initialState = [];

export const getRockets = () => async (dispatch) => {
  axios.get('https://api.spacexdata.com/v3/rockets').then((response) => {
    let rockets = response.data;
    rockets = rockets.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.description,
      flickrImages: rocket.flickr_images,
    }));
    dispatch({ type: GET_ROCKETS, rockets });
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.rockets];
    default:
      return state;
  }
};

export default reducer;
