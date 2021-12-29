const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/projects");
const articlesRouter = require("./routes/articles/articles");
const educationRouter = require("./routes/education/education");
const educationTagsRouter = require("./routes/education/tags");
const educationAmmRouter = require("./routes/education/amm");
const educationDivergenceLossRouter = require("./routes/education/divergence-loss");
const educationHoldRouter = require("./routes/education/hold");
const educationProvideLiquidityRouter = require("./routes/education/provide-liquidity");
const educationStakeRouter = require("./routes/education/stake");
const educationXykRouter = require("./routes/education/xyk");
const eventsEthRouter = require("./routes/events/eth-events");
const eventsTagsRouter = require("./routes/events/tags");
const projectsRouter = require("./routes/projects/projects");
const projectsTagsRouter = require("./routes/projects/tags");
const ethCexRouter = require("./routes/projects/centralised-exchange");
const ethDexRouter = require("./routes/projects/decentralised-exchange");
const ethDefiProtocolRouter = require("./routes/projects/yield");
const ethDefiInsuranceRouter = require("./routes/projects/insurance");
const ethDefiToolsRouter = require("./routes/projects/tool");
const analyticsRouter = require("./routes/projects/analytics");
const buyCryptoRouter = require("./routes/projects/buy-crypto");
const tagsRouter = require("./routes/projects/tags");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use("/", indexRouter);

app.use("/articles", articlesRouter);

app.use("/education", educationRouter);
app.use("/education/tags", educationTagsRouter);
app.use("/education/amm", educationAmmRouter);
app.use("/education/divergence-loss", educationDivergenceLossRouter);
app.use("/education/hold", educationHoldRouter);
app.use("/education/provide-liquidity", educationProvideLiquidityRouter);
app.use("/education/stake", educationStakeRouter);
app.use("/education/xyk", educationXykRouter);

app.use("/events/tags", eventsTagsRouter);
app.use("/events/eth-events", eventsEthRouter);

app.use("/projects", projectsRouter);
app.use("/projects/tags", projectsTagsRouter);
app.use("/projects/centralised-exchange", ethCexRouter);
app.use("/projects/decentralised-exchange", ethDexRouter);
app.use("/projects/yield", ethDefiProtocolRouter);
app.use("/projects/insurance", ethDefiInsuranceRouter);
app.use("/projects/tool", ethDefiToolsRouter);
app.use("/projects/analytics", analyticsRouter);
app.use("/projects/buy-crypto", buyCryptoRouter);

app.use("/tag", tagsRouter);

module.exports = app;
