import '../css/ReservationRocket.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRocket, cancelRocket } from '../redux/Rockets/rockets';

const ReservationRocket = ({ rocketId }) => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  const bookBotton = () => {
    dispatch(bookRocket(rockets, rocketId));
  };
  const cancelBotton = () => {
    dispatch(cancelRocket(rockets, rocketId));
  };

  return (
    <>
      <button type="button" className="Reserve-Rocket" onClick={bookBotton}> Reserve Rocket</button>
      <button type="button" className="cancel-rocket" onClick={cancelBotton}> Cancel Rocket</button>
    </>
  );
};

ReservationRocket.propTypes = { rocketId: PropTypes.number.isRequired };
export default ReservationRocket;
