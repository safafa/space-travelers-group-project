import { Table } from 'react-bootstrap';

const TableHeader = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <td />
      </tr>
    </thead>
  </Table>
);

export default TableHeader;
