const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

const AppError = require("./utils/appError");

app.options("*", cors());

// app.use(express.static(path.join(__dirname, "public")));

app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use(globalErrorHandler);

module.exports = app;
