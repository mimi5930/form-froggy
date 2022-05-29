const transporter = require('../config');
const { namelessEmail, nameEmail } = require('../utils/format-email');

// form submission without name
const sendNameless = (email, text) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(namelessEmail(email, text), (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};

// form submission with name
const sendWithName = (name, email, text) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(nameEmail(name, email, text), (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};

module.exports = { sendWithName, sendNameless };
