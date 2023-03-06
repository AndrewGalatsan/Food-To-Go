const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const test = () => {
  db.query(`INSERT INTO users (name, phone) VALUES ('Andrew', '416-555-5555') returning *`)
            .then ( (data) => {
              console.log(data)
              db.query(`INSERT INTO food_orders (user_id, created_at, updated_at, completed_at, customer_notes, status)
            VALUES (data.user_id, data.created_at, data.updated_at, data.completed_at, data.customer_notes, data.status;)`).then((testt) => {
return testt
            }).catch((error) => {
              console.log(error)
            }) })
};
test()

// module.exports = (db) => {

//   let confirmedItems = {};
//   let prices = {};
//   let customerInfo = {};
//   let totalQuantity = 0;
//   let waitTime = 0;




//   const accountSid = 'ACdf5a7fd0dd98ae7a672b705a9bcb9591';
//   const authToken = '8aae7aa726fe12ad008b759dabd13731';
//   const twilio = require('twilio');
//   const client = new twilio(accountSid, authToken);


//   router.post("/", (req, res) => {      // JSON-only route for AJAX POST
//     let selectedMenuItem = req.body;
//     const items = selectedMenuItem.itemInfo;
//     for (let item in items) {
//       confirmedItems[item] = {};
//       confirmedItems[item].id = items[item].id;
//       confirmedItems[item].qty = Number(items[item].qty);
//       confirmedItems[item].image = items[item].image;
//       totalQuantity += confirmedItems[item].qty;
//     }
//     let subPrice = ((selectedMenuItem.subTotalPrice) / 100).toFixed(2);
//     let totalPrice = (subPrice * 1.12).toFixed(2);
//     prices.subTotPrice = subPrice;
//     prices.totPrice = totalPrice;
//     res.end();
//     customerInfo.name = selectedMenuItem.customerName
//     customerInfo.phone = selectedMenuItem.customerPhone
//     customerInfo.notes = selectedMenuItem.customerNotes
//   });



// //   router.get("/", (req, res) => {

// //     db.query(`INSERT INTO users (name, phone) VALUES ('Andrew', '416-555-5555') returning *`, [customerInfo.name, customerInfo.phone])
// //               .then ( (data) => {
// //                 console.log(data)
// //                 db.query(`INSERT INTO food_orders (user_id, created_at, updated_at, completed_at, customer_notes, status)
// //               VALUES (data.user_id, data.created_at, data.updated_at, data.completed_at, data.customer_notes, data.status;)`)})
// //              // VALUES ('$1,$2,$3,$4,$5,$6'),[data.user_id, data.created_at, data.updated_at, data.completed_at, data.customer_notes, data.status];`)})


// //     for (let item in confirmedItems) {
// //       db.query(`INSERT INTO ordered_items (order_id, menu_item_id,  menu_item_name, qty)
// //       VALUES (orders.id, 2, '${confirmedItems[item].id}', ${confirmedItems[item].qty});`)
// //     };

// //     if (totalQuantity > 3) {
// //       waitTime = totalQuantity * 6;
// //     } else {
// //       waitTime = 15;
// //     }
// //     client.messages
// //     .create({
// //       body: `Your order will be ready in ${waitTime} minutes.`,
// //       from: '16472659126',
// //       to: `16473680503`
// //     }).then((message) => {
// //       console.log(message.sid)
// //     })

// //     res.render("confirmation", { confirmedItems, prices, customerInfo });
// //     });
// //   return router;
// };

