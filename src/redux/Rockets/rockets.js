import axios from 'axios';

const GET_ROCKETS = 'spacex/rockets/GET_BOOK';
const BOOK_ROCKET = 'spacex/rockets/BOOK_ROCKET';

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

export const bookRocket = (state, id, reserved) => (dispatch) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== id) return rocket;
    return { ...rocket, reserved: !reserved };
  });
  dispatch({ type: BOOK_ROCKET, newState });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.rockets];
    case BOOK_ROCKET:
      return action.newState;
    default:
      return state;
  }
};

export default reducer;
