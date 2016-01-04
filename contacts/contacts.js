var fs = require('fs');
var path = require('path');
var contacts = {};

contacts.all = function(callback){
  fs.readFile(path.join(__dirname, 'contacts.json'), 'utf-8', function(err, data){
    callback(JSON.parse(data));
  });
};

module.exports = contacts;
