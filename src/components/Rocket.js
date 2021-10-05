import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import ReservationRocket from './ReservationRocket';
import '../css/Rocket.css';

const Rocket = ({
  id, name, type, image,
}) => (
  <div className="rocket-card d-flex">
    <img src={image} alt="Rocket" className="rocket-image" />
    <div>
      <h1 className="rocket-name">{name}</h1>
      <p className="rocket-type">
        <Badge className="tag">Reserved</Badge>
        {type}
      </p>
      <ReservationRocket rocketId={id} />
    </div>
  </div>
);

Rocket.propTypes = { name: PropTypes.string.isRequired, type: PropTypes.string.isRequired };
Rocket.propTypes = { id: PropTypes.number.isRequired, image: PropTypes.string.isRequired };
export default Rocket;
