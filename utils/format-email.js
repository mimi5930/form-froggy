// format email
const testOptions = {
  from: process.env.USER,
  to: process.env.ADMIN,
  subject: 'Form submitted',
  text: 'text'
};

module.exports = { testOptions };
