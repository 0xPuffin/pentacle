const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const ethCexRouter = require("./routes/centralised-exchange");
const ethDexRouter = require("./routes/decentralised-exchange");
const ethDefiProtocolRouter = require("./routes/yield");
const ethDefiInsuranceRouter = require("./routes/insurance");
const ethDefiToolsRouter = require("./routes/tool");
const analyticsRouter = require("./routes/analytics");
const buyCryptoRouter = require("./routes/buy-crypto");
const tagsRouter = require("./routes/tag");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/centralised-exchange", ethDexRouter);
app.use("/decentralised-exchange", ethDexRouter);
app.use("/yield", ethDefiProtocolRouter);
app.use("/insurance", ethDefiInsuranceRouter);
app.use("/tool", ethDefiToolsRouter);
app.use("/analytics", analyticsRouter);
app.use("/buy-crypto", buyCryptoRouter);
app.use("/tag", tagsRouter);

module.exports = app;
