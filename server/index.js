const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', (ws) => {
  console.log('client has connected');
  
  ws.on('message', (message) => {
    console.log(message)
  });

  ws.on('close', () => {
    console.log('client has closed');
  });

  ws.on('error', (e) => {
    console.log('client has thrown an error', e);
  });

  // how to send data
  ws.send('something');
});

// utility broadcast function
wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};