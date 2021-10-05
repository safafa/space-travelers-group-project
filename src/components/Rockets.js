/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketsComponent = ({ rockets }) => {
  const rocketList = rockets.map((rocket) => {
    const { id, description } = rocket;
    const name = rocket.rocket_name;
    return (<Rocket key={id} name={name} type={description} image={rocket.flickr_images[0]} />);
  });
  return (
    <section>
      {rocketList}
    </section>
  );
};

RocketsComponent.propTypes = { rockets: PropTypes.array.isRequired };

export default RocketsComponent;
