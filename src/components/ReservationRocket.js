import '../css/ReservationRocket.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRocket } from '../redux/Rockets/rockets';

const ReservationRocket = ({ rocketId, reserved }) => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  const bookBotton = () => {
    dispatch(bookRocket(rockets, rocketId, reserved));
  };

  return (
    <input type="button" className={!reserved ? 'Reserve-Rocket' : 'cancel-rocket'} value={!reserved ? 'Reserve Rocket' : 'Cancel Rocket'} onClick={bookBotton} />
  );
};

ReservationRocket.propTypes = { rocketId: PropTypes.number.isRequired };
ReservationRocket.propTypes = { reserved: PropTypes.bool.isRequired };
export default ReservationRocket;
