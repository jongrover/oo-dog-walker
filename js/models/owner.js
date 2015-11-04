"use strict";

function Owner(fname){
  this.fname = fname;
  this.dogs = [];
  this.constructor.all.push(this);
}
Owner.prototype = new Mammal();
Owner.prototype.constructor = Owner;
Owner.prototype.addDog = function(dog) {
  this.dogs.push(dog);
};
Owner.all = [];