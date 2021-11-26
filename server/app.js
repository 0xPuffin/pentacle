const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const projectsRouter = require("./routes/projects");
const ammRouter = require("./routes/projects-amm");
const tagsRouter = require("./routes/tags");
const projecttagRouter = require("./routes/projects-tags");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/index", indexRouter);
app.use("/projects", projectsRouter);
app.use("/projects-amm", ammRouter);
app.use("/tags", tagsRouter);
app.use("/projects-tags", projecttagRouter);

module.exports = app;
