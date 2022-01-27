const { createProxyMiddleware } = require("http-proxy-middleware");
// File is only used to provide a good way to avoid cors without security issues that come along.
// Is only being used in local dev, will be ignored when deployed.

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
        target: "https://pentacle-server.herokuapp.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/", // rewrite path
      },
    })
  );
};
