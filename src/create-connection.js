var debug = require('debug')('db:mongoose-multi-connect:create-connection');
var connections = {};

module.exports = function (mongoose, url) {
  if (connections[url]) return connections[url];

  var connection = mongoose.createConnection(url);
  connections[url] = connection;
  debug('new connection created', url);

  return connection;
};
