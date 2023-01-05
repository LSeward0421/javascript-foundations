var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  };
  fillFoodBowl() {
    this.dog.eat();
  };
  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`;
  };
  introduceNewFriends(dogObj) {
    this.dog.makeNewFriend(dogObj);
  };
  adoptAPup(dogName, dogAge) {
    if (this.dog === undefined) {
      this.dog = new Dog({name: dogName, age: dogAge})
    } else {
      return `You can\'t adopt ${dogName}. You already have ${this.dog.name}!`
    }
  };
}

module.exports = Person;
