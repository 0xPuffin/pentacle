const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/projects/projects");
const articlesRouter = require("./routes/articles/articles");
const educationRouter = require("./routes/education/education");
const eventsRouter = require("./routes/events/eth-events");

const projectsRouter = require("./routes/projects/projects");
const projectsAnalyticsRouter = require("./routes/projects/analytics");
const projectsDefiRouter = require("./routes/projects/defi");
const projectsDeveloperRouter = require("./routes/projects/developer");
const projectsEducationRouter = require("./routes/projects/education");
const projectsExchangesRouter = require("./routes/projects/exchanges");
const projectsInsuranceRouter = require("./routes/projects/insurance");
const projectsJobsRouter = require("./routes/projects/jobs");
const projectsNftRouter = require("./routes/projects/nft");
const projectsYieldRouter = require("./routes/projects/yield");

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

app.use("api/articles/articles", articlesRouter);
app.use("api/education/education", educationRouter);
app.use("api/events/events", eventsRouter);
app.use("api/projects/projects", projectsRouter);
app.use("api/projects/analytics", projectsAnalyticsRouter);
app.use("api/projects/defi", projectsDefiRouter);
app.use("api/projects/developer", projectsDeveloperRouter);
app.use("api/projects/education", projectsEducationRouter);
app.use("api/projects/exchanges", projectsExchangesRouter);
app.use("api/projects/insurance", projectsInsuranceRouter);
app.use("api/projects/jobs", projectsJobsRouter);
app.use("api/projects/nft", projectsNftRouter);
app.use("api/projects/yield", projectsYieldRouter);
app.use("api/events/tags", eventsTagsRouter);
app.use("api/education/tags", educationTagsRouter);
app.use("api/projects/tags", projectsTagsRouter);
app.use("api/tag", tagsRouter);

module.exports = app;
