const sweetsApiRoutes = require("./sweetsApi");

const constructorMethod = (app) => {
  app.use("/sweets", sweetsApiRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
