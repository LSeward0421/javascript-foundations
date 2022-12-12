class Magician {
    constructor (magician) {
        this.name = `The Great ${magician.name}`
        this.assistant = magician.assistant
        this.accessory = magician.accessory
        this.favoriteAccessory = magician.accessory || `top hat`

    }
    performIncantation(incantation) {
        return `${incantation}!`.toUpperCase()
    }
}




module.exports = Magician