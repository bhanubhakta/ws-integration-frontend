// server.js
const argv = require('optimist')
            .usage('Usage: $0 -t [Token] -p [Port]')
            .demand(['t', 'p'])
            .argv;

const jsonata = require('jsonata');
const fs = require('fs'); // Import the file system module

const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = argv.p;

// Serve static files (HTML) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the HTTP server
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const token = argv.t;

const data = {
  example: [
    {value: 10},
    {value: 4},
    {value: 20},
  ]
};

fs.readFile('test.jsonata', 'utf8', (err, fileData) => {
  if (err) {
    console.error(err);
    return;
  }
  const expression = jsonata(fileData.trim());
  expression.evaluate(data).then((result) => {
  console.log("Result:", result);
});
});

// const cable = createConsumer(`ws://localhost:3001/cable?token=${token}`,
//   {
//     headers: {
//       Origin: 'http://localhost:3003',
//     },
//   }
// );

// const chatChannel = cable.subscriptions.create(
//   { channel: "ChatChannel" }, // Subscription parameters
//   {
//     connected() {
//       console.log('Connected to ChatChannel');
//     },
//     disconnected() {
//       console.log('Disconnected from ChatChannel');
//     },
//     received(data) {
//       console.log('Received from server:', data);
//     },
//     sendMessage(messageParams) {
//       this.perform("send_message", { message: messageParams });
//     }
//   }
// );

// Send a message to the server
// const messageParams = [
//   { key: "content", value: "Hello, world!" },
//   { key: "recipient_id", value: 1 }
// ];

// chatChannel.sendMessage(messageParams);
