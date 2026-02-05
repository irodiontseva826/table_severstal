import styles from "./Table.module.css";

export const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Balance</td>
          <td>Active</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.balance}</td>
            <td>{item.isActive ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
