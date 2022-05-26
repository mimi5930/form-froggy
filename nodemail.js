// format email
const options = {
  from: process.env.USER,
  to: process.env.ADMIN,
  subject: 'Form submitted',
  text: 'text'
};

// send email
transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(info);
});
