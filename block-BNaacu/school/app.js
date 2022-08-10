const express = require('express');
const path = require('path');
const studentRouter = require("./routes/student");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/students", studentRouter);

app.use((req, res, next) => {
    res.send("Page Not Found");
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});