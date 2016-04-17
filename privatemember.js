/**
 * 
 * Created by mistkafka on 4/17/16.
 */
function person() {
  //private Variable
  var fName = null;
  var lName = null;

  // assign value to private variable
  fName = "Dave";
  lName = "Smith";
};

person.prototype.fullName = function () {
  return this.fName + " " + this.lName;
};

var myPerson = new person();
console.log(myPerson.fullName());
