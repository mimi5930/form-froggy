const transporter = require('../config');
const { testOptions } = require('../utils/format-email');

// send email
transporter.sendMail(testOptions, (err, info) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(info);
});
