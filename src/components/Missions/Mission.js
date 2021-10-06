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

  const handleBooking = (payload) => {
    dispatch(bookMission(payload));
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
            <td>
              <button type="button" onClick={(itemId) => handleBooking(itemId)}>
                {reserved ? 'Leave mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Mission;
