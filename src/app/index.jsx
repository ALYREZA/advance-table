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
            width: 100,
          },
          {
            Header: "Username",
            accessor: "username",
            width: 100,
          },
          {
            Header: "Name",
            accessor: "name",
            width: 100,
          },
          {
            Header: "Email",
            accessor: "email",
            width: 200,
          },
        ],
      },
      {
        Header: "Roles",
        columns: [
          {
            Header: "Creation Date",
            accessor: "creation_date",
            disableSortBy: true,
          },
          {
            Header: "Expiration Date",
            accessor: "expiration_date",
            disableSortBy: true,
          },
          {
            Header: "Authentication Approach",
            accessor: "authentication_approach",
            disableSortBy: true,
          },
          {
            Header: "Role",
            accessor: "role",
            width: 120,
            disableSortBy: true,
          },
          {
            Header: "Working Group",
            accessor: "working_group",
            disableSortBy: true,
          },
          {
            accessor: "[editButton]",
            width: 50,
            disableSortBy: true,
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

  const [data, setData] = useState(() => makeData(500));
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
