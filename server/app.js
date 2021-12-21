const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const ammRouter = require("./routes/education/amm");
const divergenceLossRouter = require("./routes/education/divergence-loss");
const holdRouter = require("./routes/education/hold");
const stakeRouter = require("./routes/education/stake");
const xykRouter = require("./routes/education/xyk");
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
