const express = require("express");
const apiRoutes = require("./routes");
const app = express();
const {
  ServerConfig,
  ConnectionConfig,
  MiddlewareConfig,
} = require("./config");
MiddlewareConfig(app);
const init = async () => {
  try {
    await ConnectionConfig.dbConnection();
    app.use("/api", apiRoutes);
    app.listen(ServerConfig.PORT, () => {
      console.log(`Server started at port ${ServerConfig.PORT}`);
    });
  } catch (error) {
    console.log(`Problem occured while starting the server`);
  }
};
init();
