// format email
const nameEmail = (name, email, text) => {
  const emailTemplate = {
    from: process.env.USER,
    to: process.env.ADMIN,
    subject: `form submitted by ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nText: ${text}`
  };
  return emailTemplate;
};

const namelessEmail = (email, text) => {
  const emailTemplate = {
    from: process.env.USER,
    to: process.env.ADMIN,
    subject: 'form submitted',
    text: `Email: ${email}\nText: ${text}`
  };
  return emailTemplate;
};

module.exports = { nameEmail, namelessEmail };
