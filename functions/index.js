const functions = require("firebase-functions");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const logger = require("firebase-functions/logger");
const axios = require("axios");
const { sendAlert } = require("./alert");

exports.downtimeMeter = onSchedule("every 5 mins", async (event) => {
    try {
        // Replace with your Strapi health check endpoint
        const response = await axios.get('https://brave-deer-edfafb83b2.strapiapp.com/api/deliveries');

        logger.info('Response', response);

        if (response.status === 200) {
            //sendAlert('Strapi is up and running');
            logger.info('Strapi is up and running');
        } else {
            //sendAlert('Strapi is down');
            logger.error('Strapi is down');
            // Optionally, send an alert (e.g., via email or a messaging service)
        }
      } catch (error) {
        sendAlert('Strapi is down');
        logger.error('Strapi is down: ', error);
        // Optionally, send an alert (e.g., via email or a messaging service)
      }
    
      return null;
});