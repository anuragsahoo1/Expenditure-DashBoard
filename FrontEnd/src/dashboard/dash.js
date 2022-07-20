import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./dash.css";
import { DataGrid } from "@mui/x-data-grid";

import Addbutton from "./addbutton";
import Edit from "./edit";
const columns = [
  {
    field: "amnt",
    headerName: "amnt",
    width:200,
  },
  {
    field: "expen",
    headerName: "expen",
    width:200.
  },
  {
    field: "monthDate",
    headerName: "monthDate",
    width:200,
  },
];

function Dash() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8082/projects").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className='dashcontainer'>
      <div style={{ marginBottom: 40 }}>
        <Addbutton />
        <Edit />
      </div>
      <DataGrid
        style={{ width: "100%" }}
        id={Math.random()}
        getRowId={(data) => data._id}
        rows={data}
        columns={columns}
      />
    </div>
  );
}
export default Dash;
