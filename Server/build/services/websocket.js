"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageWS = exports.server = void 0;
const WebSocket = require('ws');
exports.server = new WebSocket.Server({ port: 3000 });
exports.server.on('connection', ws => {
    ws.on('message', message => {
        exports.server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.parse(message));
            }
        });
        if (JSON.parse(message) === 'exit') {
            ws.close();
        }
    });
    ws.send(JSON.stringify({ type: 'messaage', payload: 'News initial message' }));
});
function sendMessageWS(message) {
    exports.server.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}
exports.sendMessageWS = sendMessageWS;
