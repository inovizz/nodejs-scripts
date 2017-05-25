// farzi comment
let email   = require("emailjs");
const sendmail = require('sendmail');
var server  = email.server.connect({
   user:    "a@a.com",
   password:"CEKjU2PXNqaVstnz",
   host:    "smtp-relay.sendinblue.com",
   ssl:     true
});

server.send({
   text:    "Testing emailjs nodemailer service",
   from:    "s@a.com",
   to:      's@a.com',
   subject: "testing emailjs"
},function(err, message) { console.log(err || message); });

sendmail({
    from: 's@a.com',
    to: 'balchandani.sanchit@gmail.com, s@a.com',
    subject: 'test sendmail',
    html: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
~     
