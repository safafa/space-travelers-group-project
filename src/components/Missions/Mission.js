import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../../redux/Missions/missionReducer';
// import TableBody from './TableBody';
import TableHeader from './TableHeader';
import '../../css/Table.css';

const Mission = () => {
  const items = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <Table responsive striped bordered variant="primary">
      <TableHeader />
      {items.map((mission) => (
        <tbody key={mission.id}>
          <tr>
            {Array.from({ length: 1 }).map((index) => (
              <>
                <td key={index}>{mission.name}</td>
                <td key={index}>{mission.desc}</td>
                <td key={index}>status</td>
                <td key={index}>actions</td>
              </>
            ))}
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default Mission;
