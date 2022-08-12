var express = require("express");
var router = express.Router();
var User = require("../models/users");

router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, createduser) => {
    console.log(req.body);
    if (err) {
      return next(err);
    }
    res.redirect("/listUsers");
  });
});

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("users.ejs", { users: users });
  });
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);

    console.log(user);
    res.render("singleUser", { user: user });
  });
});

router.get("/:id/edit", (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("editUserForm", { user: user });
  });
});

router.put("/:id", (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect("/users/" + id);
  });
});

router.delete("/:id/delete", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

module.exports = router;
