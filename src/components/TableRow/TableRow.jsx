import { useState } from "react";
import styles from "./TableRow.module.css";
import Chevron from "../../assets/icons/Chevron.svg";

export const TableRow = ({ item, level }) => {
  const hasChildren = item.children.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr
        className={`${styles.row} ${styles[`level${level}`]} ${item.matchesFilter === false ? styles.dimmed : ""}`}
      >
        <td>
          <div
            className={styles.firstCell}
            style={{ marginLeft: `${level * 20}px` }}
            data-is-open={isOpen}
          >
            {hasChildren ? (
              <img
                src={Chevron}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.arrow}
              />
            ) : (
              <span className={styles.spacer} />
            )}
            <span>{item.id}</span>
          </div>
        </td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.balance}</td>
        <td>{item.isActive ? "Yes" : "No"}</td>
      </tr>

      {isOpen &&
        item.children.map((child) => (
          <TableRow key={child.id} item={child} level={level + 1} />
        ))}
    </>
  );
};
