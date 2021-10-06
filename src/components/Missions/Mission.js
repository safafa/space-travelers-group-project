import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Badge } from 'react-bootstrap';
import { fetchMissions } from '../../redux/Missions/missionReducer';
import { bookMission } from '../../redux/Missions/missionActions';
import TableHeader from './TableHeader';
import '../../css/Table.css';

const Mission = () => {
  const items = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const handleMission = (id) => (e) => {
    if (e.target.value === 'Join Mission') dispatch(bookMission(id));
  };

  return (
    <Table responsive striped bordered variant="light">
      <TableHeader />
      <tbody>
        {items.map(({
          id, name, desc, reserved,
        }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{desc}</td>
            <td><Badge bg="secondary">NOT A MEMBER</Badge></td>
            <td><input type="button" value={reserved ? 'Leave Mission' : 'Join Mission'} onClick={handleMission(id)} /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Mission;
