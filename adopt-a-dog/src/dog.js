class Dog {
  constructor(newDog) {
    this.name = newDog.name;
    this.age = newDog.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }
  eat() {
    if (this.hungry === true){
      this.hungry = false; 
      return `Yum!`;
    } else {
      return 'I refuse to eat.';
    };
  };

  fetchBall() {
    if (this.energyLevel <= 3) {
      return 'Nah, I\'m going to sleep instead.';
    } else {
      this.energyLevel--;
    return 'This is fun!';
    };
  };
  makeNewFriend(newDogFriend) {
    this.friends.push(newDogFriend.name);
  };
};

module.exports = Dog;
