const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/projects/projects");
const articlesRouter = require("./routes/articles/articles");
const educationRouter = require("./routes/education/education");
const eventsRouter = require("./routes/events/events");
const skillsRouter = require("./routes/skills/skills");

const projectsRouter = require("./routes/projects/projects");
const projectsAllRouter = require("./routes/projects/all");
const projectsAnalyticsRouter = require("./routes/projects/analytics");
const projectsDefiRouter = require("./routes/projects/defi");
const projectsDeveloperRouter = require("./routes/projects/developer");
const projectsEducationRouter = require("./routes/projects/education");
const projectsExchangesRouter = require("./routes/projects/exchanges");
const projectsInsuranceRouter = require("./routes/projects/insurance");
const projectsJobsRouter = require("./routes/projects/jobs");
const projectsNftRouter = require("./routes/projects/nft");
const projectsSecurityRouter = require("./routes/projects/security");
const projectsYieldRouter = require("./routes/projects/yield");

const articlesTagsRouter = require("./routes/articles/tags");
const educationTagsRouter = require("./routes/education/tags");
const eventsTagsRouter = require("./routes/events/tags");
const projectsTagsRouter = require("./routes/projects/tags");
const tagsRouter = require("./routes/projects/tags");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
const allowedOrigins = [
  "http://localhost:3000",
  "https://pentacle.xyz",
  "https://pentacle.ai",
  "https://pentacle-client-staging.herokuapp.com",
  "https://pentacle-client.herokuapp.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
            "The CORS policy for this site does not " +
            "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use("/", indexRouter);

app.use("/articles/articles", articlesRouter);
app.use("/education/education", educationRouter);
app.use("/events/events", eventsRouter);
app.use("/skills/skills", skillsRouter);

app.use("/projects/projects", projectsRouter);
app.use("/projects/all", projectsAllRouter);
app.use("/projects/analytics", projectsAnalyticsRouter);
app.use("/projects/defi", projectsDefiRouter);
app.use("/projects/developer", projectsDeveloperRouter);
app.use("/projects/education", projectsEducationRouter);
app.use("/projects/exchanges", projectsExchangesRouter);
app.use("/projects/insurance", projectsInsuranceRouter);
app.use("/projects/jobs", projectsJobsRouter);
app.use("/projects/nft", projectsNftRouter);
app.use("/projects/security", projectsSecurityRouter);
app.use("/projects/yield", projectsYieldRouter);

app.use("/articles/tags", articlesTagsRouter);
app.use("/events/tags", eventsTagsRouter);
app.use("/education/tags", educationTagsRouter);
app.use("/projects/tags", projectsTagsRouter);

app.use("/tag", tagsRouter);

module.exports = app;
