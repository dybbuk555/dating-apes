require("dotenv/config");
require("./db");

const express = require("express");
const app = express();
require("./config")(app);
const { isAuthenticated } = require("./middleware/jwt.middleware");

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const userRouter = require("./routes/user.routes");
app.use("/api", isAuthenticated, userRouter);

const messageRouter = require('./routes/message.routes');
app.use('/api', messageRouter);  


const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));
app.use((req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
  });

require("./error-handling")(app);

module.exports = app;
