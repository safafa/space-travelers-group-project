import PropTypes from 'prop-types';

const Rocket = ({ name, type, image }) => (
  <div>
    <img src={image} alt="Rocket" />
    <div>
      <h1>{name}</h1>
      <p>{type}</p>
    </div>
  </div>
);

Rocket.propTypes = { name: PropTypes.string.isRequired, type: PropTypes.string.isRequired };
Rocket.propTypes = { image: PropTypes.string.isRequired };
export default Rocket;
