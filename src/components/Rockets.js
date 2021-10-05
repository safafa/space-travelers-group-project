/* eslint-disable react/forbid-prop-types */
/* eslint-disable  max-len */
import PropTypes from 'prop-types';
import Rocket from './Rocket';
import '../css/Rockets.css';

const RocketsComponent = ({ rockets }) => {
  const rocketList = rockets.map((rocket) => {
    const {
      id, name, type, flickrImages, reserved,
    } = rocket;
    return (
      <Rocket key={id} id={id} name={name} type={type} image={flickrImages[0]} reserved={reserved} />
    );
  });
  return (
    <section className="rockets-section d-flex">
      {rocketList}
    </section>
  );
};

RocketsComponent.propTypes = { rockets: PropTypes.array.isRequired };

export default RocketsComponent;
