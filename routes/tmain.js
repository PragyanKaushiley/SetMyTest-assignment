const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const sendmail = require('sendmail')();
const nodemailer = require('nodemailer');

// Initialize Firebase
var app = firebase.initializeApp({
      apiKey: "AIzaSyCI71u3vQnpJUNOIdCN5QbEbu2uyGiM7Sg",
      authDomain: "setmytest-2a759.firebaseapp.com",
      databaseURL: "https://setmytest-2a759.firebaseio.com",
      projectId: "setmytest-2a759",
      storageBucket: "setmytest-2a759.appspot.com",
      messagingSenderId: "274115448777"
});

var ref1 = firebase.database().ref('users/');
var ref2 = firebase.database().ref('userInformation/');
var user1= 'Your-Gmail-ID@gmail.com' ;//enter your email
var pass1= 'Your-password' ;//enter your password

router.get('/', (req,res) => {
  res.render('./index/Login');
});

router.post('/',(req,res) => {
  var newUser = {
    Username: req.body.name,
    Email : req.body.email
  };
  ref1.push(newUser);
  ref2.push(newUser);

  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user1,
    pass: pass1
  }
});

var mailOptions = {
  from: user1,
  to: req.body.email,
  subject: 'Welcome Mail',
  text: 'Dear ' + req.body.name + ', Welcome to our app. Have a good day!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  res.redirect('/confirm')
});

router.get('/confirm',(req,res) => {
  res.render('./index/Loged');
})

module.exports = router;
