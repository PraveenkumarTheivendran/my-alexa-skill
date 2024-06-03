// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { intent, slots } = req.body;
  // Handle the Alexa skill logic here
  const response = `Received intent: ${intent} with slots: ${JSON.stringify(slots)}`;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
