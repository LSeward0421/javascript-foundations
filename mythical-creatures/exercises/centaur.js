

class Centaur {
    constructor(newCentaur) {
        this.name = newCentaur.name
        this.breed = newCentaur.type
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.action = 0
    }
    shootBow() {
        if (this.cranky || this.layingDown) {
            return 'NO!'
        }
        this.action += 1
        if (this.action >= 3) {
            this.cranky = true;
        }
        return 'Twang!!!';
    }
  run() {
    if (this.cranky || this.layingDown) {
        return 'NO!'
    }
    this.action += 1
    if (this.action >= 3) {
        this.cranky = true;
    }
    return 'Clop clop clop clop!!!';
}
  sleep() {
    if (this.standing) {
        return 'NO!'
    }
    if (this.layingDown) {
        this.cranky = false;
        return 'ZZZZ';
    }
}
  layDown() {
    this.standing = false
    this.layingDown = true
  }
  standUp() {
    this.standing = true
    this.layingDown = false
  }
  drinkPotion() {
    this.cranky = false
    if (!this.standing) {
        return 'Not while I\'m laying down!'
    }
  }
}




module.exports = Centaur