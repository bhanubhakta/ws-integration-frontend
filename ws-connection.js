import { createConsumer } from "actioncable";

console.log("Initializing WebSocket connection...");

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyMWYxZWY2OC1mNWViLTQ0YWYtOGI5OC0wYzk0ZDgyZjQzMzEiLCJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzM3MzUyMjk2LCJleHAiOjE3MzczNTQwOTZ9.3Otc5bNnlXmxRN4eXa5xadDQJM4YaBfNmLOcclXKXjQ';
const cable = createConsumer(`ws://127.0.0.1:3001/cable?token=${token}`, {
  headers: {
    Origin: 'http://localhost:3003',
  }
});  // Ensure the URL is correct for your server

const chatChannel = cable.subscriptions.create('ChatChannel', {
  connected() {
    console.log('Connected to ChatChannel!');
  },
  disconnected() {
    console.log('Disconnected from ChatChannel');
  },
  received(data) {
    console.log('Received data:', data);
  }
});

chatChannel.subscribed = () => {
  console.log('WebSocket subscription created');
};
