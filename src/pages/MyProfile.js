/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import '../css/MyProfile.css';

const MyProfile = ({ rockets }) => {
  const myRockets = rockets.filter((rocket) => rocket.reserved);
  const list = myRockets.map((rocket) => (<li className="myRocket-name" key={rocket.id}>{rocket.name}</li>));
  return (
    <section className="d-flex myprofile-section">
      <div className="my-div">
        <h1>My missions</h1>
      </div>
      <div className="my-div">
        <h1>My Rockets</h1>
        <ul className="myRocket-list">
          {list}
        </ul>
      </div>
    </section>
  );
};

MyProfile.propTypes = { rockets: PropTypes.array.isRequired };

export default MyProfile;
