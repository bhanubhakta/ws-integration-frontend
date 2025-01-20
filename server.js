// server.js
const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = 3003;

// Serve static files (HTML) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the HTTP server
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyMWYxZWY2OC1mNWViLTQ0YWYtOGI5OC0wYzk0ZDgyZjQzMzEiLCJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzM3MzUyMjk2LCJleHAiOjE3MzczNTQwOTZ9.3Otc5bNnlXmxRN4eXa5xadDQJM4YaBfNmLOcclXKXjQ';

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
