// routes/auth-routes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
// User model
const User = require("../models/user");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

// router.post("/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username === "" || password === "") {
//     res.render("auth/signup", { message: "Indicate username and password" });
//     return;
//   }

//   User.findOne({ username }, "username", (err, user) => {
//     if (user !== null) {
//       res.render("auth/signup", { message: "The username already exists" });
//       return;
//     }

//     const salt = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);

//     const newUser = new User({
//       username,
//       password: hashPass
//     });

//     newUser.save((err) => {
//       if (err) {
//         res.render("auth/signup", { message: "Something went wrong" });
//       } else {
//         res.redirect("/");
//       }
//     });
//   });
// });


router.get("/login", (req, res, next) => {
    res.render("auth/login");
  });
  
  router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "auth/login",
    failureFlash: true,
    passReqToCallback: true
  }));
  




module.exports = router;