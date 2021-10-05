/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketsComponent = ({ rockets }) => {
  const rocketList = rockets.map((rocket) => {
    const {
      id, name, type, flickrImages,
    } = rocket;
    return (<Rocket key={id} name={name} type={type} image={flickrImages[0]} />);
  });
  return (
    <section>
      {rocketList}
    </section>
  );
};

RocketsComponent.propTypes = { rockets: PropTypes.array.isRequired };

export default RocketsComponent;
