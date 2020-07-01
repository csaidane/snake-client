const net = require('net');

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("data", data => {
    console.log(data);
  });
  conn.on("connect", () => console.log("connected to server !"));
  conn.on('connect', () => {
    conn.write('Name: CS');
  });
  conn.on('connect', () => {
    conn.write('Move: up');
  });
  //conn.on("connect", () => setInterval(() => conn.write('Move: up'), 50));
  return conn;
};

let temp = {connect};

module.exports = temp;