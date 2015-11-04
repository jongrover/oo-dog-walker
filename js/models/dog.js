"use strict";

function Dog(fname, owner) {
  this.fname = fname;
  this.owner = owner;
  this.owner.addDog(this);
  this.constructor.all.push(this);
}
Dog.prototype = new Mammal();
Dog.prototype.constructor = Dog;
Dog.all = [];