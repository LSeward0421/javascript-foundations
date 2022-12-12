class Magician {
    constructor (magician) {
        this.name = `The Great ${magician.name}`
        this.assistant = magician.assistant
        this.favoriteAccessory = `cape`

    }
    performIncantation(incantation) {
        return `${incantation}!`.toUpperCase()
    }
}




module.exports = Magician