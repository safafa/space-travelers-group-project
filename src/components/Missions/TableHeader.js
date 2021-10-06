import { Table } from 'react-bootstrap';
import '../../css/Table.css';

const TableHeader = () => (
  <Table responsive striped bordered hover variant="light">
    <thead>
      <tr>
        {Array.from({ length: 1 }).map((index) => (
          <>
            <th key={index}>Missions</th>
            <th key={index}>Description</th>
            <th key={index}>Status</th>
            <th key={index}>Actions</th>
          </>
        ))}
      </tr>
    </thead>
  </Table>
);

export default TableHeader;
