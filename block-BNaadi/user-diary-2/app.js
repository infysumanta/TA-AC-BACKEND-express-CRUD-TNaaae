const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");

mongoose.connect(
  "mongodb://localhost/user_diary_2",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", userRouter);

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
