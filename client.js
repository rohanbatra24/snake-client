const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.0.203',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 1000);
  });

  return conn;
};

module.exports = { connect };
