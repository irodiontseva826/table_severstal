import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { getData } from "./api/getData";
import { buildTree } from "./utils/buildTree";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <>
      <Table data={buildTree(data)} />
    </>
  );
}

export default App;
