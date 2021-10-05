import PropTypes from 'prop-types';
import ReservationRocket from './ReservationRocket';
import '../css/Rocket.css';

const Rocket = ({ name, type, image }) => (
  <div className="rocket-card d-flex">
    <img src={image} alt="Rocket" className="rocket-image" />
    <div>
      <h1 className="rocket-name">{name}</h1>
      <p className="rocket-type">{type}</p>
      <ReservationRocket />
    </div>
  </div>
);

Rocket.propTypes = { name: PropTypes.string.isRequired, type: PropTypes.string.isRequired };
Rocket.propTypes = { image: PropTypes.string.isRequired };
export default Rocket;
