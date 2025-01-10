const logger = require('firebase-functions/logger');
const axios = require('axios');

async function sendAlert(message) {
  try {
    // Post to https://freelance-site-web-server.onrender.com
    const body = {
      message: message,
      email: "strapi-downmeter@ccett.com"
    }

    const response = await axios.post('https://freelance-site-web-server.onrender.com/send-email', body);

    if (response.status !== 200) {
      throw new Error('Failed to send alert email');
    } else {
      console.log('Alert email sent');
    }
  } catch (error) {
    logger.error('Error sending alert email:', error); 
  }
}

exports.sendAlert = sendAlert;