"use strict";
const express = require("express");
const app = express();
const path = require("path");
const questionsRoute = require("./routes/question.api");
const scoresRoute = require("./routes/scores.api");
const cors = require("cors");

app.use(express.static(__dirname + "/dist"));

app.use(cors());
app.use(express.json());
app.use("/", questionsRoute);
app.use("/", scoresRoute);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
