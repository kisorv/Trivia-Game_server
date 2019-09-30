"use strict";
const express = require("express");
const app = express();
const port = 8000;
const questionsRoute = require("./routes/question.api");
const scoresRoute = require("./routes/scores.api");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", questionsRoute);
app.use("/", scoresRoute);
app.listen(port, () => console.log(`Server is running on port ${port}`));
