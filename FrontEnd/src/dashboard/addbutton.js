import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import "./addbutton.css";
import axios from "axios";
function Addbutton() {
  const [open, setOpen] = useState(false);
  const [amnt, setAmnt] = useState("");
  const [expen, setExpen] = useState("");
  const [monthDate, setMonthDate] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAmount = (e) => {
    console.log(e.target.value);
    setAmnt(e.target.value);
  };
  const handleExpen = (e) => {
    setExpen(e.target.value);
  };
  const handleDate = (e) => {
    setMonthDate(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();

    const data = await axios({
      url: "http://localhost:8082/adddata",
      method: "POST",
      data: { amnt, expen, monthDate },
    });

    window.location.reload();
    console.log(data);
  }

  return (
    <div>
      <div>
        <button
          type='submit'
          className='add_dash'
          style={{ position: "absolute", right: "10pt" }}
          onClick={handleOpen}>
          ADD
        </button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD DATA</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Amount'
            type='Amount'
            fullWidth
            variant='standard'
            onChange={handleAmount}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='ExpenDiture'
            type='Expen'
            fullWidth
            variant='standard'
            onChange={handleExpen}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            type='Date'
            fullWidth
            variant='standard'
            onChange={handleDate}
          />
        </DialogContent>
        <DialogActions>
          <Button className='adddialog' onClick={handleSubmit}>
            ADD
          </Button>
          <Button className='adddialog' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Addbutton;
