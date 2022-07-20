import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import './addbutton.css';
function Edit(){
    return(
      <div>
        <button
        style={{ position: "absolute", right:"57pt",  }} 
        className="add_dash" type="submit" >EDIT</button>
      </div>
    );
}
export default Edit;