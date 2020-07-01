const net = require('net');

const PORT = 50541;
const HOST = "135.23.222.148";

const connect = function() {
  const conn = net.createConnection({ 
    host: HOST,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("data", data => {console.log(data)})
  return conn;
}

let temp = {connect};

module.exports = temp;