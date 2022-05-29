const transporter = require('../config');
const { namelessEmail, nameEmail } = require('../utils/format-email');

// form submission for dev website
const devSubmission = (name, email, text) => {
  return new Promise((resolve, reject) => {
    if (!name) {
      transporter.sendMail(namelessEmail(email, text), (err, info) => {
        if (err) reject(err);
        resolve(info);
      });
    } else {
      transporter.sendMail(nameEmail(name, email, text), (err, info) => {
        if (err) reject(err);
        resolve(info);
      });
    }
  });
};

module.exports = { devSubmission };
