import { SortableHeader } from "../SortableHeader";
import { TableRow } from "../TableRow";
import styles from "./Table.module.css";

export const Table = ({ data, sortBy, sortOrder, onSortChange }) => {
  const handleSort = (field) => {
    if (sortBy === field) {
      if (sortOrder === "asc") {
        onSortChange(field, "desc");
      } else if (sortOrder === "desc") {
        onSortChange(null, null);
      }
    } else {
      onSortChange(field, "asc");
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headRow}>
          <th>ID</th>
          <th>Name</th>
          <SortableHeader
            field="email"
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSort={handleSort}
          >
            Email
          </SortableHeader>
          <SortableHeader
            field="balance"
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSort={handleSort}
          >
            Balance
          </SortableHeader>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} item={item} level={0} />
        ))}
      </tbody>
    </table>
  );
};
