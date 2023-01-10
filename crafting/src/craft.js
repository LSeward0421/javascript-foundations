class Craft {
  constructor(hobbyObj) {
    this.name = hobbyObj.type
    this.materials = hobbyObj.materials
    this.completed = false
 }
 completeCraft() {
  this.completed = true;
  return 'All done! It looks great!'
 }
 calculateProjectTotal() {
  console.log(this.materials[0].calculateMaterialCost())

  var sum = this.materials[0].calculateMaterialCost() + this.materials[1].calculateMaterialCost()

  return sum
 }
}

module.exports = Craft;
