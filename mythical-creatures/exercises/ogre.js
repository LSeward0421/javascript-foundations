
class Ogre {
    constructor(newOgre) {
        this.name = newOgre.name
        this.home = newOgre.abode || 'Swamp'
        this.swings = 0
    }
    encounter(human) {
        human.encounterCounter ++
        if (human.noticesOgre() === true) {
            this.swings ++
            human.knockedOut = true
    } else {
            this.swings
    }
}
    swingAt() {
        this.swings += 1
    }
    apologize(human) {
        human.knockedOut = false
    }
}








module.exports = Ogre