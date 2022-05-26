const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  console.log('post request');
  res.end();
});

app.listen(PORT, () => console.log('Now listening on port', PORT));
