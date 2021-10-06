import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/Missions/missionReducer';
import TableHeader from './TableHeader';

const Mission = () => {
  const items = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div>
      {items.map((mission) => (
        <div key={mission.id}>
          <p>{mission.name}</p>
          <p>{mission.desc}</p>
        </div>
      ))}
      hi
    </div>
  );
};

export default Mission;
