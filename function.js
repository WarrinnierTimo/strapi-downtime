const { log } = require("console");
const axios = require("axios");
const { sendAlert } = require("./functions/alert");

async function getCustomers(params) {
  try {
          // Replace with your Strapi health check endpoint
          const response = await axios.get('http://localhost:1337/api/customers');

          if (response.status === 200) {
              console.log('Strapi is up and running');
              sendAlert('Strapi is up and running');
          } else {
              console.log('Strapi is down');
              // Optionally, send an alert (e.g., via email or a messaging service)
              sendAlert('Strapi is down');
          }
        } catch (error) {
          console.log('Strapi is down: ', error);
          // Optionally, send an alert (e.g., via email or a messaging service)
          sendAlert('Strapi is down');
        }
      
        return null;
}

getCustomers();