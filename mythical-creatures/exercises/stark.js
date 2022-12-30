const Direwolf = require('../exercises/direwolf');

class Stark {
    constructor(newStark) {
        this.name = newStark.name
        this.location = newStark.area || 'Winterfell'
        this.safe = false
    }
    sayHouseWords() {
        if (this.safe) {
            return 'The North Remembers'
        }
        return 'Winter is Coming'
    }
    callDirewolf(wolf, location) {
        var calledWolf = new Direwolf (wolf, location)
        calledWolf.home = this.location;
        calledWolf.protect(this);
        return calledWolf;
    }
}



module.exports = Stark