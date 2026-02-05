export const Filter = ({ status, onChange }) => (
  <label>
    Select
    <select value={status} onChange={onChange}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </label>
);
