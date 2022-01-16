const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/projects/projects");
const articlesRouter = require("./routes/articles/articles");
const educationRouter = require("./routes/education/education");
const eventsRouter = require("./routes/events/eth-events");
const projectsRouter = require("./routes/projects/projects");

const educationTagsRouter = require("./routes/education/tags");
const eventsTagsRouter = require("./routes/events/tags");
const projectsTagsRouter = require("./routes/projects/tags");
const tagsRouter = require("./routes/projects/tags");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.use("/articles/articles", articlesRouter);
app.use("/education/education", educationRouter);
app.use("/events/events", eventsRouter);
app.use("/projects/projects", projectsRouter);

app.use("/events/tags", eventsTagsRouter);
app.use("/education/tags", educationTagsRouter);
app.use("/projects/tags", projectsTagsRouter);

app.use("/tag", tagsRouter);

module.exports = app;