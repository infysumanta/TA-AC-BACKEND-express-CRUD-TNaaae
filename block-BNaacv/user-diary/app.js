const express = require("express");
const path = require("path");
const userRouter = require("./routes/user");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/user", userRouter);

app.use((req, res, next) => {
    res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
    console.log("Server listening to port 3k");
});
