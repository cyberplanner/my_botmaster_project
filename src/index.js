// Settings Stuff
const Botmaster = require('botmaster');
require('dotenv').config();

const telegramSettings = {
  credentials: {
    authToken: process.ENV.TOKEN,
  },
  webhookEndpoint: '/start/',
};
