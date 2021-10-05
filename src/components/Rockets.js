import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketsComponent = ({ rockets }) => {
  const rocketList = rockets.map((rocket) => {
    const { name, type, image } = rocket;
    return (Rocket(name, type, image));
  });
  return (
    <section>
      {rocketList}
    </section>
  );
};

RocketsComponent.propTypes = { rockets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object())) };
RocketsComponent.propTypes = { rockets: PropTypes.isRequired };
export default RocketsComponent;
