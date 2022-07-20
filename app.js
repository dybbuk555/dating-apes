// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const { isAuthenticated } = require("./middleware/jwt.middleware");
//未來的routes要加上中間件 isAuthenticated 來保護
 
const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
