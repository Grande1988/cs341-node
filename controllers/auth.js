const bcrypt = require('bcryptjs');
const nodemailr = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')

const User = require("../models/user");

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}));

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};
exports.postLogin = (req, res, next) => {
  User.findById("6168ead507738dfce3a57117")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postSignup = (req, res, next) => {};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};