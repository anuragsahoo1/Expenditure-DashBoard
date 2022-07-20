const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb://localhost:27017/anurag",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const project = new mongoose.Schema({
  amnt: String,
  expen: String,
  monthDate: String,
});
const Project = mongoose.model("project", project);
app.get("/projects", async (req, res) => {
  const data = await Project.find({});
  res.send(data);
});
app.post("/projects", async (req, res) => {
  const am = await Project.findOne({}).sort({ _id: -1 }).limit(1);

  res.send(am?.amnt);
});
app.post("/expens", async (req, res) => {
  const am = await Project.findOne({}).sort({ _id: -1 }).limit(1);

  res.send(am?.expen);
});
app.post("/results", async (req, res) => {
  const expen_1 = await Project.findOne({}).sort({ _id: -1 }).limit(1);
  const intamnt = parseInt(expen_1.amnt);
  const intexpen = parseInt(expen_1.expen);
  const response = String(intamnt - intexpen);
  res.send(response);
});
app.post("/adddata", async (req, res) => {
  const reqdata = await Project.insertMany({
    amnt: req.body.amnt,
    expen: req.body.expen,
    monthDate: req.body.monthDate,
  });
  res.send(reqdata);
});
app.listen("8082", () => {
  console.log("server started!!!!!!!!");
});
