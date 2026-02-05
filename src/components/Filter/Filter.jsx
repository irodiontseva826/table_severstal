import styles from "./Filter.module.css";

export const Filter = ({ status, onChange }) => (
  <label className={styles.filter}>
    Select status
    <select value={status} onChange={onChange} className={styles.select}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </label>
);
