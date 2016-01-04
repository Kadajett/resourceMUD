// Requires
var Chance = require('chance');

// Instantiation
var chance = new Chance();

// generation methods
var logger = (function(){
  var history = {
    er: [],
    log: []
  };
  
}());

var creator = (function(){}(
  function createName(){
    var name = {
      first: chance.first(),
      last: chance.last()
    };
    return name;
  }
));
