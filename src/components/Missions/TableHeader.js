const TableHeader = () => (
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
);

export default TableHeader;
