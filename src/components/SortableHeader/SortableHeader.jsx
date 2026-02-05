import styles from "./SortableHeader.module.css";
import Arrow from "../../assets/icons/Arrow.svg";
import ArrowsUpDown from "../../assets/icons/Arrows_Up_Down.svg";

export const SortableHeader = ({
  field,
  children,
  sortBy,
  sortOrder,
  onSort,
}) => {
  const isMatched = sortBy === field;

  return (
    <th onClick={() => onSort(field)} className={styles.header}>
      <div className={styles.content}>
        {children}
        {isMatched && sortOrder === "asc" && (
          <img
            src={Arrow}
            style={{ transform: "rotate(90deg)" }}
            className={styles.icon}
          />
        )}
        {isMatched && sortOrder === "desc" && (
          <img
            src={Arrow}
            style={{ transform: "rotate(-90deg)" }}
            className={styles.icon}
          />
        )}
        {!isMatched && <img src={ArrowsUpDown} className={styles.icon} />}
      </div>
    </th>
  );
};
