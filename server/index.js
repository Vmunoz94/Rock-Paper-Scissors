const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });
const player1Id = 1;
const player2Id = 2;
let switchId = true;

wss.on('connection', (ws) => {
  console.log('client has connected');
  
  ws.on('message', (message) => {
    console.log(message)
    wss.broadcast(message);
  });

  ws.on('close', () => {
    wss.broadcast("Reset")
    console.log('client has closed');
  });

  ws.on('error', (e) => {
    console.log('client has thrown an error', e);
  });

  // how to send data
  if (switchId){
    switchId = !switchId
    ws.send(player1Id);
  }
  else {
    switchId = !switchId
    ws.send(player2Id);
  }
  // ws.send('something');
});

// utility broadcast function
wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};