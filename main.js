var coffeeShop = {
  beans: 40,
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  makeDrink: function(drinkType) {
    //TODO: Finish this method
    //WORKS: console.log(drinkType);
    //WORKS: console.log(Object.keys(this.drinkRequirements));
    //WORKS: console.log(this.drinkRequirements[(drinkType)]);
    if (!(Object.keys(this.drinkRequirements)).includes(drinkType)) {
      console.log("Sorry, we don't make " + drinkType + ".");
    } else if (((Object.keys(this.drinkRequirements)).includes(drinkType)) && (this.beans >= this.drinkRequirements[(drinkType)])) {
      this.beans -= this.drinkRequirements[(drinkType)];
      console.log("One " + drinkType + ", coming right up!");
    } else {
      console.log("Sorry, we don't have enough beans left for that!");
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
