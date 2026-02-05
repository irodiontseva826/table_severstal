import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { getData } from "./api/getData";
import { buildTree } from "./utils/buildTree";
import { Filter } from "./components/Filter";
import { filterTree } from "./utils/filterTree";
import { sortTree } from "./utils/sortTree";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const changeStatus = (event) => {
    setStatus(event.target.value);
  };

  const sortChange = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
  };

  const tree = buildTree(data);
  const filteredTree = filterTree(tree, status);
  const sortedTree = sortTree(filteredTree, sortBy, sortOrder);

  return (
    <>
      <Filter status={status} onChange={changeStatus} />
      <Table
        data={sortedTree}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={sortChange}
      />
    </>
  );
}

export default App;
