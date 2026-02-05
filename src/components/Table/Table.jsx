import { TableRow } from "../TableRow";
import styles from "./Table.module.css";

export const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headRow}>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Balance</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} item={item} level={0}/>
        ))}
      </tbody>
    </table>
  );
};
