class Dragon {
    constructor(name, rider) {
        this.name = name
        this.rider = rider
        this.hungry = true
        this.eats = 0
        this.greet = function greet() {
            return `Hi, ${rider}!`
        }
    } 
    eat() {
        this.eats += + 1;
     if (this.eats === 3) {
        this.hungry = false
     }
    }
}






module.exports = Dragon