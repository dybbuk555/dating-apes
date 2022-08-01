module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({ errorMessage: "This route does not exist" });
  });

  app.use((err, req, res, next) => {
    if (!res.headersSent) {
      res
        .status(500)
        .json({
          errorMessage: "Internal server error. Check the server console",
        });
    }
  });
};
