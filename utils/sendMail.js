//const nodemailer = require('nodemailer');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async ({ to, subject, text, html }) => {
  const emailOptions = {
    to,
    from: 'dasoftweb@gmail.com',
    subject,
    text,
    html,
  };

  const response = await sgMail.send(emailOptions);
  return response;
};

module.exports = sendMail;
