import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "./add.css";
import TextField from "@mui/material/TextField";
import "react-clock/dist/Clock.css";
import Expense from "./expense";
import axios from "axios";
import Res from "./res.js";
import Clock from "react-clock";

function Add() {
  const [clck, setClck] = useState(new Date());

  const [val, setValue] = useState("");

  const currentDateTime = new Date();
  const timeText = currentDateTime.toLocaleTimeString();
  console.log(timeText);
  useEffect(() => {
    const interval = setInterval(() => setClck(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(clck);

  async function handleShow(e) {
    e.preventDefault();
    const data = await axios({
      url: "http://localhost:8082/projects",
      method: "POST",
    });
    console.log(data);
    setValue(data.data);
  }

  return (
    <div className='addadata'>
      <h1
        style={{
          position: "absolute",
          bottom: 220,
          color: "black",
          fontWeight: "bold",
        }}>
        DashBoard
      </h1>

      <div className='buttonupper'>
        <h1>{val}</h1>
        <span
          style={{
            position: "absolute",
            left: 550,
            bottom: 146,
            top: 6,
            color: "Black",
            fontSize: 20,
          }}>
          {timeText}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <button
          className='addbutton'
          style={{ position: "absolute", left: 20, bottom: "10pt" }}
          type='submit'
          onClick={handleShow}>
          Amount
        </button>
        <Expense />
        <Res />
      </div>
    </div>
  );
}
export default Add;
