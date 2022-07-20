import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "./add.css";
import TextField from "@mui/material/TextField";
import axios from "axios";

function Expense() {
  const [expen, setExpen] = useState();
  async function handleExpenditure(e) {
    e.preventDefault();
    const data = await axios({
      url: "http://localhost:8082/expens",
      method: "POST",
      
    });
    console.log(data);
    setExpen(data.data);
  }
  return (
    <div className="'addadata'"
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <div className="uppermid">
        <h1 className='expen'>{expen}</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <button type='submit' className='addbutton' onClick={handleExpenditure}>
          ExPenDiture
        </button>
      </div>
    </div>
  );
}
export default Expense;
