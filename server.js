const express = require('express');
const cors = require('cors');
const { sendWithName, sendNameless } = require('./controllers/send-email');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post('/no-name', async (req, res) => {
  const { email, text } = req.body;

  try {
    const response = await sendNameless(email, text);
    res.json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post('/with-name', async (req, res) => {
  const { name, email, text } = req.body;

  try {
    const response = await sendWithName(name, email, text);
    res.json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.listen(PORT, () => console.log('Now listening on port', PORT));
