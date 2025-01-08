// Write your code here
// define the brekfast class

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

//define the lunch class
class Lunch {
    constructor (salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

//define the dinner class

class Dinner {
    #dessert; //private field for dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}