var List = require('./list-ADT');

var nameList = new List();

nameList.append({first_name: 'Zhenguo', last_name: 'Lin'});
nameList.append({first_name: 'Kafka', last_name: 'Mist'});
nameList.append({first_name: 'Jolie', last_name: 'Yang'});
nameList.append({first_name: 'Jay', last_name: 'Ji'});

nameList.end();
console.log(nameList.getElement());
nameList.front();
console.log(nameList.getElement());

// TODO: use test util write test code.


