const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const projectsRouter = require("./routes/projects");
const ethAmmRouter = require("./routes/projects-amm");
const ethDexRouter = require("./routes/eth-decentralised-exchange");
const ethDefiProtocolRouter = require("./routes/eth-defi-protocol");
const ethDefiInsuranceRouter = require("./routes/eth-defi-insurance");
const tagsRouter = require("./routes/tags");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/index", indexRouter);
app.use("/projects", projectsRouter);
app.use("/projects-amm", ethAmmRouter);
app.use("/eth-decentralised-exchange", ethDexRouter);
app.use("/eth-defi-protocol", ethDefiProtocolRouter);
app.use("/eth-defi-insurance", ethDefiInsuranceRouter);
app.use("/tags", tagsRouter);

module.exports = app;
