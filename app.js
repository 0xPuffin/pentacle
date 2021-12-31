const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./server/routes/projects");
const articlesRouter = require("./server/routes/articles/articles");
const educationRouter = require("./server/routes/education/education");
const educationTagsRouter = require("./server/routes/education/tags");
const educationAmmRouter = require("./server/routes/education/amm");
const educationDivergenceLossRouter = require("./server/routes/education/divergence-loss");
const educationHoldRouter = require("./server/routes/education/hold");
const educationProvideLiquidityRouter = require("./server/routes/education/provide-liquidity");
const educationStakeRouter = require("./server/routes/education/stake");
const educationXykRouter = require("./server/routes/education/xyk");
const eventsEthRouter = require("./server/routes/events/eth-events");
const eventsTagsRouter = require("./server/routes/events/tags");
const projectsRouter = require("./server/routes/projects/projects");
const projectsTagsRouter = require("./server/routes/projects/tags");
const ethCexRouter = require("./server/routes/projects/centralised-exchange");
const ethDexRouter = require("./server/routes/projects/decentralised-exchange");
const ethDefiProtocolRouter = require("./server/routes/projects/yield");
const ethDefiInsuranceRouter = require("./server/routes/projects/insurance");
const ethDefiToolsRouter = require("./server/routes/projects/tool");
const analyticsRouter = require("./server/routes/projects/analytics");
const buyCryptoRouter = require("./server/routes/projects/buy-crypto");
const tagsRouter = require("./server/routes/projects/tags");

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/src/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
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

const PORT = process.env.PORT || 3001;
app.listen(PORT);