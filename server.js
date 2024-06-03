const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();
app.use(bodyParser.json());

app.post('/.netlify/functions/alexa', (req, res) => {
  if (req.body.request.type === 'LaunchRequest') {
    res.json({
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: 'Welcome to my Alexa skill!',
        },
      },
    });
  } else if (req.body.request.type === 'IntentRequest' &&
             req.body.request.intent.name === 'GetInfoIntent') {
    res.json({
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: 'Here is the information you requested.',
        },
      },
    });
  } else {
    res.json({
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: 'Sorry, I didn\'t understand that. Please try again.',
        },
      },
    });
  }
});

module.exports.handler = serverless(app);