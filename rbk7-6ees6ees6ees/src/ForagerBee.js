class ForagerBee extends Bee {
  constructor() {
  	super()
  	this.age = 10;
  	this.job = "find pollen";
  	this.canFly = true;
  	this.treasureChest = [];
  }

  forage(item) {
  	this.treasureChest.push(item)
  }
};
