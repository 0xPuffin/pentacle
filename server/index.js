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

const index = express();

index.use(logger("dev"));
index.use(cookieParser());
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(express.static(path.join(__dirname, "build")));

index.use("/", indexRouter);

index.use("/articles", articlesRouter);

index.use("/education", educationRouter);
index.use("/education/tags", educationTagsRouter);
index.use("/education/amm", educationAmmRouter);
index.use("/education/divergence-loss", educationDivergenceLossRouter);
index.use("/education/hold", educationHoldRouter);
index.use("/education/provide-liquidity", educationProvideLiquidityRouter);
index.use("/education/stake", educationStakeRouter);
index.use("/education/xyk", educationXykRouter);

index.use("/events/tags", eventsTagsRouter);
index.use("/events/eth-events", eventsEthRouter);

index.use("/projects", projectsRouter);
index.use("/projects/tags", projectsTagsRouter);
index.use("/projects/centralised-exchange", ethCexRouter);
index.use("/projects/decentralised-exchange", ethDexRouter);
index.use("/projects/yield", ethDefiProtocolRouter);
index.use("/projects/insurance", ethDefiInsuranceRouter);
index.use("/projects/tool", ethDefiToolsRouter);
index.use("/projects/analytics", analyticsRouter);
index.use("/projects/buy-crypto", buyCryptoRouter);

index.use("/tag", tagsRouter);

module.exports = index;
