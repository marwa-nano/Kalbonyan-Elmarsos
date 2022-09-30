const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.send({
//   to: "marwa.arabcoders2021@gmail.com",
//   from: "marwa.arabcoders2021@gmail.com",
//   subject: "This is my first creation Email",
//   text: "I hope that arrive to you",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "marwa.arabcoders2021@gmail.com",
    subject: "thanks for joining ",
    text: `Welcome to app,${name}
    .let me know how you get the app `,
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "marwa.arabcoders@gmailcom",
    subject: "sorry to see you go",
    text: `goodbye: ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
