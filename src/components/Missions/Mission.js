import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Badge, Button } from 'react-bootstrap';
import { fetchMissions } from '../../redux/Missions/missionReducer';
import TableHeader from './TableHeader';
import '../../css/Table.css';

const Mission = () => {
  const items = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <Table responsive striped bordered variant="light">
      <TableHeader />
      <tbody>
        {items.map((mission) => (

          <tr key={mission.id}>
            {Array.from({ length: 1 }).map(() => (
              <>
                <td>{mission.name}</td>
                <td>{mission.desc}</td>
                <td><Badge bg="secondary">NOT A MEMBER</Badge></td>
                <td><Button variant="outline-secondary" size="sm">Join Mission</Button></td>
              </>
            ))}
          </tr>

        ))}
      </tbody>
    </Table>
  );
};

export default Mission;
