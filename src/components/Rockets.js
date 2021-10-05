/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Rocket from './Rocket';
import '../css/Rockets.css';

const RocketsComponent = ({ rockets }) => {
  const rocketList = rockets.map((rocket) => {
    const {
      id, name, type, flickrImages,
    } = rocket;
    return (<Rocket key={id} name={name} type={type} image={flickrImages[0]} />);
  });
  return (
    <section className="rockets-section d-flex">
      {rocketList}
    </section>
  );
};

RocketsComponent.propTypes = { rockets: PropTypes.array.isRequired };

export default RocketsComponent;
