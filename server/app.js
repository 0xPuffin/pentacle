const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/projects");
const articlesRouter = require("./routes/articles/articles");
const educationRouter = require("./routes/education/education");
const ammRouter = require("./routes/education/amm");
const divergenceLossRouter = require("./routes/education/divergence-loss");
const holdRouter = require("./routes/education/hold");
const stakeRouter = require("./routes/education/stake");
const xykRouter = require("./routes/education/xyk");
const ethCexRouter = require("./routes/projects/centralised-exchange");
const ethDexRouter = require("./routes/projects/decentralised-exchange");
const ethDefiProtocolRouter = require("./routes/projects/yield");
const ethDefiInsuranceRouter = require("./routes/projects/insurance");
const ethDefiToolsRouter = require("./routes/projects/tool");
const analyticsRouter = require("./routes/projects/analytics");
const buyCryptoRouter = require("./routes/projects/buy-crypto");
const tagsRouter = require("./routes/projects/tag");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/articles", articlesRouter);
app.use("/education", educationRouter);
app.use("/amm", ammRouter);
app.use("/divergence-loss", divergenceLossRouter);
app.use("/hold", holdRouter);
app.use("/stake", stakeRouter);
app.use("/xyk", xykRouter);
app.use("/centralised-exchange", ethCexRouter);
app.use("/decentralised-exchange", ethDexRouter);
app.use("/yield", ethDefiProtocolRouter);
app.use("/insurance", ethDefiInsuranceRouter);
app.use("/tool", ethDefiToolsRouter);
app.use("/analytics", analyticsRouter);
app.use("/buy-crypto", buyCryptoRouter);
app.use("/tag", tagsRouter);

module.exports = app;
