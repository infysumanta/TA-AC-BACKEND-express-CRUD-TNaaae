const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.locals.message = "Schools";
    next();
});

app.get("/", (req, res) => {
    res.render("index");
});

app.use((req, res, next) => {
    res.send("Page Not Found");
});
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
