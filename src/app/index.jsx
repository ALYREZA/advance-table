import { useMemo, useState } from "react";
import makeData from "./components/makeData";
import Table from "./components/Table";
import styles from "./index.module.css";
import Styles from "./components/TableStyle";

const App = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Account",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Username",
            accessor: "username",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
        ],
      },
      {
        Header: "Roles",
        columns: [
          {
            Header: "Creation Date",
            accessor: "creation_date",
          },
          {
            Header: "Expiration Date",
            accessor: "expiration_date",
          },
          {
            Header: "Authentication Approach",
            accessor: "authentication_approach",
          },
          {
            Header: "Role",
            accessor: "role",
          },
          {
            Header: "Working Group",
            accessor: "working_group",
          },
          {
            accessor: "[editButton]",
            Cell: (cellObj) => (
              <button onClick={() => handleClickEditRow(cellObj.row.index)}>
                Edit
              </button>
            ),
          },
        ],
      },
    ],
    []
  );

  const handleClickEditRow = (rowIndex) => {
    setData((old) =>
      old.map((row, index) => ({ ...row, isEditing: rowIndex === index }))
    );
  };

  const [data, setData] = useState(() => makeData(120));
  const [originalData] = useState(data);
  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return { ...row, isEditing: false };
      })
    );
  };
  const resetData = () => setData(originalData);

  return (
    <Styles className={styles.container}>
      <h1>
        User Management{" "}
        <small>
          <button onClick={resetData}>Reset Data</button>
        </small>
      </h1>
      <Table columns={columns} data={data} updateMyData={updateMyData} />
    </Styles>
  );
};

export default App;
