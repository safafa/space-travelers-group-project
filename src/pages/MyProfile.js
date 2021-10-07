import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import '../css/MyProfile.css';
import { getMissions } from '../redux/Missions/missionActions';
import store from '../redux/configureStore';

const MyProfile = ({ rockets }) => {
  const missions = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    store.dispatch(getMissions(missions));
  }, []);

  const bookedMissions = missions.filter((mission) => mission.reserved);

  const missionListing = bookedMissions.map((mission) => (<li className="item-name border" key={mission.id}>{mission.name}</li>));

  const myRockets = rockets.filter((rocket) => rocket.reserved);
  const list = myRockets.map((rocket) => (<li className="item-name border" key={rocket.id}>{rocket.name}</li>));
  return (
    <section className="d-flex myprofile-section mt-3">
      <div className="my-div">
        <h2>My missions</h2>
        {missionListing.length !== 0 && (
        <ul className="item-list border">
          {missionListing}
        </ul>
        )}
      </div>
      <div className="my-div">
        <h2>My Rockets</h2>
        {list.length !== 0 && (
        <ul className="item-list border">
          {list}
        </ul>
        )}
      </div>
    </section>
  );
};

MyProfile.propTypes = { rockets: PropTypes.array.isRequired };

export default MyProfile;
