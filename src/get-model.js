const singleton = require('./singleton');

module.exports = (name, postfix) => {
  var instance = singleton();
  var mongoose = instance.mongoose;
  var schemas = instance.schemas;
  var url = instance.url;

  if (postfix) url = url + '-' + postfix;

  var connection = mongoose.createConnection(url);
  var model = connection.model(name, schemas[name]);

  return model;
};
