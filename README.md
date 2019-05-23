# Final 667
All packages necessary should be pre-insalled, don't install more.

## Task
Create a simple 2 player rock–paper–scissors

### Sub tasks
- create a home page with 3 buttons, and 3 display divs. 2 for showing player's choice, and 1 for showing winner. Also add a reset button to clear the display.
- create a reducer to hold values for choices
- create appropriate actions
- create a web socket connection, assume only 2 players
- On click, send each players choice to the server via message
- When both players have made a choice, the winner is displayed
- updates are sent out in real time
- Add reset functionality, triggered by a reset button
- no microservices necessary, back end can be 1 single file
- if a player disconnects, the game has to reset too

### Point breakdown (Each 10)
- Ui with buttons, buttons have correct handlers
- Reducer with all values, do not use react state
- Action(s) to set the values
- ws message to send choice (client/server combo)
- logic to handle p1/p2 on server
- trigger reset on client disconnect
- manually trigger a reset from a user
- Websocket broadcast choice (client/server combo)
- websocket broadcast reset (client/server combo)
- Front end, display correct state, (Waiting on turn, or who wins)

## Running
first install with `npm install`. 
Start front end with
```
npm run-script start
```
Start server with
```
node server/index.js
```