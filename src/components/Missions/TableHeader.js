const TableHeader = () => (
  <thead>
    <tr>
      {Array.from({ length: 1 }).map(() => (
        <>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
