/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import RocketsComponent from '../components/Rockets';

const Rockets = ({ rockets }) => (
  <div>
    <RocketsComponent rockets={rockets} />
  </div>
);

Rockets.propTypes = { rockets: PropTypes.array.isRequired };
export default Rockets;
