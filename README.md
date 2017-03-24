# Mongoose multi connect

Establish multi connections with using DB name postfix. 

```js
const url = 'mongodb://localhost:27017/multi-db';
const mongoose = require('mongoose');
const multiConnect = require('mongoose-multi-connect');

const schemas = {
  'post': new mongoose.Schema({ some: String })
};

multiConnect.init({ url, mongoose, schemas });

// Model 'post' from 'mongodb://localhost:27017/multi-db-location1' 
const PostLocation1 = multiConnect.getModel('post', 'location1');

// Model 'post' from 'mongodb://localhost:27017/multi-db-location2' 
const PostLocation2 = multiConnect.getModel('post', 'location2');
```