class Vampire {
    constructor (name, pet) {
        this.name = name;
        this.thirsty = true
        this.ouncesDrank = 0
        if (pet === undefined) {
            this.pet = 'bat';
          } else {
          this.pet = pet;
        }
    }

    drink() {
        this.ouncesDrank += 10;
        if (this.ouncesDrank >= 50) {
            return 'I\'m too full to drink anymore!'
        } 
        return this.thirsty = false
    }
}

module.exports = Vampire