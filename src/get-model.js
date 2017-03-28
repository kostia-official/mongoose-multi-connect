var singleton = require('./singleton');
var getPostfix = require('./get-postfix');
var createConnection = require('./create-connection');

module.exports = (name, postfixData, postfixPath) => {
  var instance = singleton();
  var mongoose = instance.mongoose;
  var schemas = instance.schemas;
  var url = instance.url;

  var postfix = getPostfix(postfixData, postfixPath);
  if (postfix) url = url + '-' + postfix;

  var connection = createConnection(mongoose, url);
  return connection.model(name, schemas[name]);
};
