import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Badge } from 'react-bootstrap';
import { fetchMissions, bookMission } from '../../redux/Missions/missionReducer';
import TableHeader from './TableHeader';
import '../../css/Table.css';

const Mission = () => {
  const items = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const handleBooking = (payload, id) => {
    dispatch(bookMission(payload, id));
  };

  return (
    <Table responsive striped bordered variant="light">
      <TableHeader />
      <tbody>
        {items.map(({
          id, name, desc, reserved,
        }) => (
          <tr key={id}>
            <td className="fw-bold">{name}</td>
            <td className="text-secondary">{desc}</td>
            <td className="status"><Badge className={reserved ? 'bg-info' : 'bg-secondary'}>{reserved ? 'Active Member' : 'NOT A MEMBER'}</Badge></td>
            <td>
              <input type="button" className={reserved ? 'leave' : 'join'} value={reserved ? 'Leave mission' : 'Join Mission'} onClick={() => handleBooking(items, id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Mission;
