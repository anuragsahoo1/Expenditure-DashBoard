import React from "react";
import { useState } from "react";
import axios from "axios";
import "./add.css";
function Res() {
  const [res, setResult] = useState();
  async function handleResult(e) {
    const data = await axios({
      url: "http://localhost:8082/results",
      method: "POST",
    });
    setResult(data.data);
  }
  return (
    <div className='adddata'>
      <div className='buttonleft'>
        <h1>{res}</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <button
          type='submit'
          className='addbutton'
          style={{ position: "absolute", right: 25, bottom: "10pt" }}
          onClick={handleResult}>
          ReSult
        </button>
      </div>
    </div>
  );
}
export default Res;
