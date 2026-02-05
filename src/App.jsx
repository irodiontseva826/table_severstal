import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { getData } from "./api/getData";
import { buildTree } from "./utils/buildTree";
import { Filter } from "./components/Filter";
import { filterTree } from "./utils/filterTree";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    getData().then(setData);
  }, []);

  const changeStatus = (event) => {
    setStatus(event.target.value);
  };

  const tree = buildTree(data);
  const filteredTree = filterTree(tree, status);

  return (
    <>
      <Filter status={status} onChange={changeStatus} />
      <Table data={filteredTree} />
    </>
  );
}

export default App;
