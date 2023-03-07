// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

require('dotenv').config();
const ENV        = process.env.ENV || "development";
// const express    = require("express");
// const app        = express();

const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const twilioSMSAPI = () => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  // return function (options) {
    client.messages
      .create({
        body: 'step 1',
        from: "+16477782876",
        to: "+16477782876",
      })
      .then((message) => console.log(message.sid))
      // .catch((error) => console.log(error));
  // };
// };
// const notifySMS = twilioSMSAPI();

// const notifyOwner = (id = 1234, phoneNumber = "step 2") => {
//   const options = {
//     text: `New Order is placed`,
//     phoneNumber: "+16477782876",
//   };
//   // notifySMS(options);
// };

// const notifyCustomerOrderConfirmed = (
//   id = 7,
//   waitTime = 15,
//   phoneNumber = "+16477782876"
// ) => {
//   const options = {
//     text: `step 3!`,
//     phoneNumber: "+16477782876",
//   };
//   // notifySMS(options);
// };

// const notifyCustomerOrderReady = (id = 1234, phoneNumber = "+16048805245") => {
//   const options = {
//     text: `Your order is ready for a pickup.`,
//     phoneNumber,
//   };
//   // notifySMS(options);
// };

// module.exports = {
//   notifyOwner,
//   notifyCustomerOrderConfirmed,
//   notifyCustomerOrderReady,
// };
