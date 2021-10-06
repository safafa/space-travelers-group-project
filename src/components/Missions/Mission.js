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
      {items.map((mission) => (
        <tbody key={mission.id}>
          <tr>
            {Array.from({ length: 1 }).map((index) => (
              <>
                <td key={index}>{mission.name}</td>
                <td key={index}>{mission.desc}</td>
                <td key={index}><Badge bg="secondary">NOT A MEMBER</Badge></td>
                <td key={index}><Button variant="outline-secondary" size="sm">Join Mission</Button></td>
              </>
            ))}
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default Mission;
