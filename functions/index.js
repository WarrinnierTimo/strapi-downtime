const functions = require("firebase-functions");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const logger = require("firebase-functions/logger");
const axios = require("axios");
const { sendAlert } = require("./alert");

exports.scheduledFunction = onSchedule("every 5 mins", async (event) => {
    try {
        // Replace with your Strapi health check endpoint
        const response = await axios.get('https://a855-2a02-a03f-e02e-e701-a5fc-94bf-e658-1601.ngrok-free.app/api/customers');

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
        //sendAlert('Strapi is down');
        logger.error('Strapi is down: ', error);
        // Optionally, send an alert (e.g., via email or a messaging service)
      }
    
      return null;
});